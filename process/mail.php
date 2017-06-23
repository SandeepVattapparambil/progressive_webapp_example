<?php
$name = $_GET["name"];
$email = $_GET["email"];
$message_new = $_GET["message"];

$to      = 'sandeepv68@gmail.com'
$subject = 'Message from Visitor';
$message = 'Message from '.$name.' - '.$message_new;
$headers = 'From: webmaster@pwa-example-sandeep.herokuapp.com' . "\r\n" .
    'Reply-To: no-reply@pwa-example-sandeep.herokuapp.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>
