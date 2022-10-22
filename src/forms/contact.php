<?php
$to_email = 'junaidpinjari2002@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: junaidpinjari@tempr.email';
mail($to_email,$subject,$message,$headers);
?>