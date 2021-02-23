const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commandes').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commandes/${file}`);
    client.commands.set(command.name, command);
    console.log(`Commande chargée : '${command.name}'`);
}

client.on('ready', () => {
    console.log(`${client.user.tag} c'est bien connecté !`);
});

client.on('message', message => {
    if (message.author.bot) return;

    if (message.content === 'salut') message.channel.send(`Salut **${message.member.nickname}** !\nComment allez vous ?`);
    if (message.content === 'bonjour') message.channel.send(`Bonjour **${message.member.nickname}** !\nComment allez vous ?`);
    if (message.content === 'bonsoir') message.channel.send(`Bonsoir **${message.member.nickname}** !\nAvait-vous passez une bonne journée ?`);
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    client.commands.get(command).excute(client, message, args);
});

client.login(TOKEN);