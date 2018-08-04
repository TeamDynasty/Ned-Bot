const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

bot.login(process.env.BOT_TOKEN);


if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}
