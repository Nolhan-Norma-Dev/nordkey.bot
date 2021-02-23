module.exports = {
    name: 'profil',
    description: 'Affiche les information du Profil. / Affiche les informations de l\'utilisateur si mentionnée.',
    excute(client, message, args) {
        const user_mention = message.mentions.users.first();
        if (user_mention) {
            message.channel.send(`Voici les information sur le profil de **${user_mention.tag}**.`);
        } else {
            message.channel.send(`Voici les information sur votre profil : **${message.author.tag}**.\n\n> Pour voir le profil d'une autre personne excuter cette commande : \`+profil @[utilisateur]\``);
        }
    }
}