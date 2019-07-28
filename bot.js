const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

// Configure logger settings
client.on('ready', () => {
    console.log('Logged in as popchatbot!');
});

client.login(process.env.BOT_TOKEN);

const friv = new Discord.Attachment('https://cdn.discordapp.com/attachments/567392980525121565/601581914461175809/Screenshot_20190717-235040.jpg')
const messy = new Discord.Attachment('https://i.imgur.com/fEKbH8i.gif')
const jess = new Discord.Attachment('https://cdn.discordapp.com/attachments/604571326794956802/604596555458281472/ezgif.com-resize.gif')

client.on('message', msg => {

  if (msg.content.substring(0, 2) == 'p!') {

  var args = msg.content.substring(2).split(' ');

  switch(args[0]) {
    case 'friv': 
        msg.channel.send(friv);
    break; 
    case 'messy':
        msg.channel.send(messy);
    break; 
    case 'jess':
        msg.channel.send(jess);
    break; 
    default:
        msg.reply('eat a dick nikka, im working on this');
    break; 
        
  }
}
});
