<?php 
if (!isset($_POST["submit"])) { ?>
 
  <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
   To: <input type="text" name="to_email"><br>
   From: <input type="text" name="from_email"><br>
   Subject: <input type="text" name="subject"><br>
   Message: <textarea rows="10" cols="20" name="message"></textarea><br>
   <input type="submit" name="submit" value="Send Email">
  </form>
<?php
} else {
 
  if (isset($_POST["to_email"])) {
    $to_email = $_POST["to_email"];
    $from_email = $_POST["from_email"];
    $subject = $_POST["subject"];
    $body = $_POST["message"];
 
    if ( mail($to_email, $subject, $body, $headers)) {
      echo("Email successfully sent to $to_email...");
    } else {
      echo("Email sending failed...");
    }
  }
}
?>