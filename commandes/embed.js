const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Template des embed.',
    excute(client, message, args) {
        const embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL(), "https://nordkey.net")
            .setColor("#20201e")
            .setTitle("Je suis le titre avec un lien")
            .setURL("https://nordkey.net")
            .setDescription("Je suis la description")
            .setThumbnail(client.user.displayAvatarURL())
            .addField("Je suis un champ 1", "je suis une valeur aligner 1", true)
            .addField("Je suis un champ 2", "je suis une valeur aligner 2", true)
            .addField("Je suis un champ 3", "je suis une valeur aligner 3", true)
            .addField("Je suis un champ 4", "je suis une valeur aligner 4", true)
            .addField("Je suis un champ 1", "je suis une valeur non aligner 1")
            .addField("Je suis un champ 2", "je suis une valeur non aligner 2")
            .addFields(
                { name: 'Je suis un champ 1', value: 'Je suis une valeur 1', inline: true },
                { name: 'Je suis un champ 2', value: 'Je suis une valeur 2', inline: true },
                { name: 'Je suis un champ 3', value: 'Je suis une valeur 3', inline: true },
                { name: 'Je suis un champ 4', value: 'Je suis une valeur 4', inline: true }
            )
            .setImage(client.user.displayAvatarURL())
            .setTimestamp()
            .setFooter("© 2021 NordKey | Tous droits réservés.");

        message.channel.send(embed);
    }
}