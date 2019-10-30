<?php

define('BOT_TOKEN', '362794792:AAHhJeVzB_Ii3yhLbstKudEqvzEALRH_IhU');
define('API_URL', 'https://api.telegram.org/bot'.BOT_TOKEN.'/');

$method = "sendMessage";

// ID получателей в Telegram
$chat_id[] = "-178011880"; // ID Чата

// цикл отправки по всем ID получателей в Telegram
foreach ($chat_id as $chat_id) {
		$url = API_URL.$method.'?';

		$handle = curl_init($url);  
		curl_setopt($handle, CURLOPT_URL,$url); // Устанавливаем URL на который посылать запрос 
		curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($handle, CURLOPT_TIMEOUT, 60);
		curl_setopt($handle, CURLOPT_POSTFIELDS, "chat_id=".$chat_id."&parse_mode=Markdown&text=".$telegram_text); // посылаемые значения
		$result = curl_exec($handle);  
		curl_close($handle);

		// if (strpos($result,'200 OK')!== TRUE) echo "Сообщение в Telegram успешно отправлено <br>";
		// else echo "<b>Bad</b>";
}

?>