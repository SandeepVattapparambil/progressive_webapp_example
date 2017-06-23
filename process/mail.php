<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message_new = $_POST["message"];

$to      = 'sandeepv68@gmail.com';
$subject = 'Message from Visitor';
$message = 'Message from '.$name.' - '.$message_new.'';
$headers = 'From: webmaster@pwa-example-sandeep.herokuapp.com' . "\r\n" .
    'Reply-To: no-reply@pwa-example-sandeep.herokuapp.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    // Please specify your Mail Server - Example: mail.yourdomain.com.
    ini_set("SMTP","pwa-example-sandeep.herokuapp.com");

    // Please specify an SMTP Number 25 and 8889 are valid SMTP Ports.
    ini_set("smtp_port","25");

    // Please specify the return address to use
    ini_set('sendmail_from', 'sandeep@pwa-example-sandeep.herokuapp.com');

if(mail($to, $subject, $message, $headers)){
  return 'success';
}
else{
  return 'fail';
}
?>
