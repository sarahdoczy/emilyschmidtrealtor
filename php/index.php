<?php
       // from the form
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message = htmlentities($_POST['message']);  

       // set here
       $subject = "Contact form submitted!";
       $to = 'eschmidt@sibcycline.com';
       
       //$body = $name; $message;
       $body = "From: $name\r\n <br />\n<br />\n  Message:\r\n $message";

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
       //header('Location: thanks.html');
?>
