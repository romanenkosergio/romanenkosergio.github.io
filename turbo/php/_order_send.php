<? // Отправкаа заявок
if((isset($_POST['phone'])&&$_POST['phone']!="")) {

	include "constant.php";

	$phone = trim($_POST["phone"]);

	if((isset($_POST['name'])&&$_POST['name']!="")){
		$name = trim($_POST["name"]);
	} else {
		$name = "Имени нет";
	}

	// Отправка заявки в телеграм
	$telegram_text = "*TurboINSTA: Новая заявка*\r\n\n".$name."\r\n".$phone;
	include "telegram.php";

	// Отправка заявки на почту
	include "mail.php";

}



?>

