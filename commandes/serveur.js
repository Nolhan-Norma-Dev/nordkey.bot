module.exports = {
    name: 'serveur',
    description: 'Affiche les informations du serveur.',
    excute(client, message, args) {
        message.channel.send(`Je suis sur le serveur **${message.guild.name}**.`);
    }
}