var TelegramBot = require('./my_ntba');

var TELE_TOKEN = 'YOUR_TELEGRAM_TOKEN';

var bot = new TelegramBot(TELE_TOKEN, {polling: true});
bot.on('message', (msg) => {
  var chat_id = msg.chat.id;
  console.log(chat_id);
  var response = 'your user_id is ' + chat_id;
  bot.sendMessage(chat_id, response);
});
