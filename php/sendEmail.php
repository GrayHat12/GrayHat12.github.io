<?php 
$str = $_POST;
$params = array();
parse_str($str,$params)
$to = 'grayhathacks10@gmail.com'
$name = $params['form-field.contactName']
$email = 'From : '+$params['form-field.contactEmail']
$subject = $params['form-field.contactSubject']
$message = $params['form-field.contactMessage']
if(mail($to,$subject,$message,$email))
{
    echo('OK');
}
else
{
    echo("Internal Error");
}
?>
https://docs.google.com/forms/d/e/1FAIpQLSeiRiMa8t_aK-dXavmFrQ2NBZ1or-j-IzBzXi4ja41XJ6-nVg/viewform?usp=pp_url&entry.1877295955=garbageEmail&entry.89873864=garbageSubject&entry.1532171854=garbageMessage&entry.1909589477=garbageName