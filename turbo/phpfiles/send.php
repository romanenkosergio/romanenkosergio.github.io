<?
  $query = $_POST["query"];
  $theme = '';
  $body = '';
  include "constant.php";

if ($query) :

	// $emailTo = "inbrogues1@gmail.com";
	if($query['theme']){
		$theme = $query['theme'];
	}
	$name = $query['name'];
	$phone = $query['phone'];

	// $subject = "Order from turboinsta.com.ua. ".$theme;

	// $headers  = "From: \"TurboInsta\" <info@turboinsta.com.ua>\r\n";

	// $headers .= "X-Mailer: PHPMail Tool\r\n";

	// if($query['name']){
	//   	$body  = "Имя: " . $query['name'];
	//   }

 //  $body .= "\nНомер телефона: " . $query['phone'];

 //  mail($emailTo, $subject, $body, $headers);
	include "mail.php";

  // Отправка заявки в телеграм
	// $telegram_text = "*TurboINSTA: Новая заявка*\r\n\n".$query['name']."\r\n".$query['phone'];
	// include "telegram.php";

endif;

?>
