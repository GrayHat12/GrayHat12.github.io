<?php 
$str = $_POST;
$params = array();
parse_str($str,$params)
$to = 'grayhathacks10@gmail.com'
$name = $params['contactName']
$email = 'From : '+$params['contactEmail']
$subject = $params['contactSubject']
$message = $params['contactMessage']
if(mail($to,$subject,$message,$email))
{
    echo("OK");
}
else
{
    echo("Internal Error");
}
?>