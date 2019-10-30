<?
require_once "smtp_mail.php";

// Авторизация в smtp почте
	$mailSMTP = new SendMailSmtpClass($maillogin, $mailpassword, 'ssl://smtp.yandex.ru', $company, 465);
	
// Тема письма
	$subject = "Order from turboinsta.com.ua. ".$theme; // тема сообщения

// Текст письма
	$message = "<div style='padding: 5px 15px; background-color: #f5f5fa; font-size: 16px; border-radius='5px';>";
	$message .= " <p>
						<span style='color: #666'>Имя:</span>
						<span style='color: #778cda; font-weight: bold;'>$name</span>
					</p>";
	
	$message .= " <p>
						<span style='color: #666'>Телефон:</span>
						<a href='tel:$phone' style='color: #778cda; font-weight: bold;'>$phone</a>
					</p>";
	$message .= " <p style='font-size:12px;'>
						<span style='color: #666'>IP человека оставившего заявку:</span>
						<span style='color: #778cda; font-weight: bold;'>$ip</span>
					</p>";
	$message .= "</div>";

// Парамметры письма
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
	$headers .= "From: ".$company."<".$companymail.">\r\n"; // от кого письмо

// Почты на которые должны приходить заявки
	$result =  $mailSMTP->send('turboinsta.com.ua@gmail.com', $subject, $message, $headers); // Почта 1
	$result =  $mailSMTP->send('turboinsta@mail.ua', $subject, $message, $headers); // Почта 2
	$result =  $mailSMTP->send('stassmm9@gmail.com', $subject, $message, $headers); // Почта 3
	$result =  $mailSMTP->send('info@turboinsta.com.ua', $subject, $message, $headers); // Почта 4

	if($result === true){
	 echo "Письмо на почту успешно отправлено";
	}else{
	 echo "Письмо не отправлено. Ошибка: " . $result;
	}
?>