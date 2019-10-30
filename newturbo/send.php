<?
  $query = $_POST["query"];
  $theme = '';
  $body = '';

if ($query) :

	$emailTo = "inbrogues1@gmail.com";
	if($query['theme']){
		$theme = $query['theme'];
	}

	$subject = "Order from turboinsta.com.ua. ".$theme;

	$headers  = "From: \"TurboInsta\" <info@turboinsta.com.ua>\r\n";

	$headers .= "X-Mailer: PHPMail Tool\r\n";

	$headers .= 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";

	if($query['name']){
  	$body  = "Имя: " . $query['name'];
  }

  $body .= "\nНомер телефона: " . $query['phone'];

  mail($emailTo, $subject, $body, $headers);

  // Отправка заявки в телеграм
	$telegram_text = "*TurboINSTA: Новая заявка*\r\n\n".$query['name']."\r\n".$query['phone'];
	include "telegram.php";

endif;
?>
