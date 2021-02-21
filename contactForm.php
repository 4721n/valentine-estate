<?php

if (isset($_POST['submit'])) {
    $mailTo = [];
    $checkboxes = [];
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);

    $email = filter_var($_POST['emailAddress'], FILTER_SANITIZE_EMAIL);
    $number = htmlspecialchars($_POST['phoneNumber']);

    $message = htmlspecialchars($_POST["message"]);

    if (isset($_POST['blank-fitted'])) {
        $mailTo[] = 'gbrewster@hanovergreen.co.uk, nproctor@hanovergreen.co.uk';
        $checkboxes[] = 'blank-fitted';
    }

    if (isset($_POST['managed-radio'])) {
        $mailTo[] = 'Londonbrokers@kittoffices.com';
        $checkboxes[] = 'managed';
    }

    if (count($mailTo) === 0) {
        // This means that a checkbox hasn't been selected
        // you could do $mailTo[] = 'default@email-address.com';
        // which means it would go to this only if nothing was
        // selected
        header("Location: index.html?mailerror");
    }

    $bcc = "sasha@kittoffices.com, jamie@launcelot.co.uk";
    $subject = "Valentine Estate Website Enquiry From; " . $email;
    $txt = "You have an enquiry from " . $firstName . " $lastName \n" .
        'Contact number: ' . $number . "\n" .
        'Selected Checkboxes: ' . implode(',', $checkboxes) . "\n" .
        $message;

    // This takes an array, and turns it into a string separated by ', '
    $emailsToSendTo = implode(', ', $mailTo);
    $headers = implode(
        "\r\n",
        [
            "MIME-Version: 1.0",
            "Content-type: text/plain; charset=utf-8",
            "Bcc: $bcc",
        ]
    );

    mail($emailsToSendTo, $subject, $txt, $headers);
    header("Location: index.html?mailsent");
}
