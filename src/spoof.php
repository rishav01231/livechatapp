<?php
$to = "rishavmishra354@gmail.com";
$subject = "[URGENT]Password reset request";
$txt = "Hi Rishav,we received a password reset request from your
 account could you please reply with your current credentials
 and someone from our team will get in touch with you shortly.
 <br>
 Regards,<br>
 Support Team";
$headers = "GMAIL Support<gmailsupport@gsupportrequest.com>" . "\r\n" ;

mail($to,$subject,$txt,$headers);
?>