const Discord = require('discord.js');
const{token} = require('./package.json')
const fs = require('fs');

//initializes the bot
const client = new Discord.Client(token);

//the bot uses '-' for it's commands
const prefix = '-';

client.commands = new Discord.Collection();
//makes sure bot is only pulling from .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//prints message to the console to let me know its started
client.once('ready', () =>{
    console.log('bot is online');
});

client.on('message', message =>{
    //makes sure that the message starts with the assigned prefix and the bot is not coming from the bot itself
    if(!message.content.startsWith(prefix) || message.author.bot) 
        return;
    const args = message.content.slice(prefix.length).split(/ +/);
    //converts the users command into lower case (for ease of programming)
    const command = args.shift().toLowerCase();
    //executes the ping command
    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }
    //executes the math command
    else if(command === 'math'){
        client.commands.get('math').execute(message, args);
    }
    //executes the wiki function
    else if(command === 'wiki'){
        client.commands.get('wiki').execute(message, args);
    }
    //executes the searchwiki function
    else if(command == 'wikisearch'){
        client.commands.get('wikisearch').execute(message,args);
    }
});
client.login(token);