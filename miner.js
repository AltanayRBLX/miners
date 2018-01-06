const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'm!' ;
//something

client.on('ready', () => {
  console.log(`BOT: ${client.user.tag} adıyla giriş yapıldı!`);
  client.user.setGame('Miners V1 m!ping');
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('**Pong!** '  +  client.ping);
  }
  if (msg.content === 'hi') {
    msg.reply('**Welcome**');
    msg.react('🍵');
    }
  }
});

client.login('Mzk2MzA1NjczMTkwODk5NzE0.DSff8g.9VKjrYEgXtkw-BQ5olTjB8VG7YU');
   
