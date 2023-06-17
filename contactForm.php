<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $website = $_POST['companyWebsite'];
    $mailFrom= $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "office@lionmonkey.dev";
    $headers = "From: LMD website contact form - ".$mailFrom;
    $txt = "You have received an e-mail from ".$name."from ".$website.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.php?mailsend");
}