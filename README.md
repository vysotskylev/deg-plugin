# deg-plugin

После подключения плагина нужно открыть Инструменты разработчика (Developer tools), нажав `Ctrl-Shift-I` (Windows/Linux) или `Command-Option-I` (Mac). Далее переходите на страницу голосования и голосуйте. После отправки бюллетеня нажмите на жёлтую кнопку в левом верхнем углу для скачивания файла с информацией о вашем голосе.

Файл можно отправить нашему [Телеграм-боту](https://t.me/save_your_vote_bot). Большое количество записанных голосов позволит нам лучше проанализировать электронное голосование. Мы не будем публиковать персонализированную информацию без вашего согласия или передавать её третьим лицам.


<!-- Плагин автоматически предложит скачать JSON-файл при отправке заполненного бюллетеня.
**Пожалуйста**, не забудьте также скачать HAR-файл (журнал всех сетевых запросов), это поможет в точности понять, что происходило во время голосования. Инструкция ниже. -->

<!-- ## Скачивание HAR-файла
**ДО** перехода на страницу с бюллетенем (можно сразу после открытия страницы mos.ru) нужно включить сбор логов.
Инструкции (текстом и видео), как это сделать в вашем браузере, [здесь](https://knowledge.vidyard.com/hc/en-us/articles/360009996213-Download-a-HAR-file-from-your-browser). Коротко:
 1. **Firefox**: откройте Инструменты разработчика (Developer tools), нажав `Ctrl-Shift-I` или выбрав пункт в правом верхнем меню. Перейдите во вкладку "Network", нажмите на шестерёнку в правом верхнем углу и выберите пункт "Persist logs". После отправки бюллетеня снова нажмите на шестерёнку и нажмите "Save all as HAR".
 2. **Chrome**: откройте Инструменты разработчика (Developer tools), нажав `Ctrl-Shift-I` или выбрав пункт в правом верхнем меню. Перейдите во вкладку "Network", если слева вверху этой вкладки лампочка не горит красным, нажмите на неё. Выберите галочку "Preserve log", если она не нажата. После отправки бюллетеня нажмите правой кнопкой мыши внутри этой вкладки и выберите "Save all as HAR with content".
 3. **Edge**: нажмите правой кнопкой мыши на странице и выберите "Inspect element". Перейдите на вкладку "Network". После отправки бюллетеня нажмите кнопку с дискетой вверху вкладки "Network". -->


## Подключение плагина

Скачайте и распакуйте архив с плагином: https://github.com/vysotskylev/deg-plugin/archive/refs/heads/main.zip
Далее, в зависимости от браузера:
 1. **Firefox**: введите в адресной строке `about:debugging#/runtime/this-firefox`, нажмите кнопку "Load temporary Add-Ons" и выберите путь к файлу election2022/manifest.json в распакованной папке ([инструкция с картинками](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/))
 2. **Chrome**: введите в адресной строке `chrome://extensions`, в правой части включите "Developer mode", нажмите "Load unpacked" и выберите путь к election2022 в распакованной папке ([инструкция с картинками](https://developer.chrome.com/docs/extensions/mv3/getstarted/))
 3. **Edge**: введите в адресной строке `edge://extensions`, слева внизу включите "Developer mode", нажмите "Load unpacked" и выберите путь к election2022 в распакованной папке ([инструкция с картинками](https://docs.microsoft.com/ru-ru/microsoft-edge/extensions-chromium/getting-started/extension-sideloading))

