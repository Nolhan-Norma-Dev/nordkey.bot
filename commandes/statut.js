const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'statut',
    description: 'Affiche le statut des infrastructures NordKey',
    excute(client, message, args) {

        if (message.author == "610448055346397194") {
            message.delete().catch();
            const embed = new MessageEmbed()
                .setAuthor("Statut des infrastructures - NordKey", client.user.displayAvatarURL(), "https://nordkey.net")
                .setColor("#20201e")
                .setDescription("Voyez en temps réelle si les infrastructure de NordKey sont en ligne !");

            const embedServices = new MessageEmbed()
                .setDescription("**__Services & Offres__**")
                .addField("Web", "• Opérationnel", true)
                .addField("Discord", "• Opérationnel", true)
                .addField("Média", "• Opérationnel", true)
                .addField("VPS", "• Indisponible", true)
                .addField("TeamSpeak", "• Indisponible", true);

            const embedDiscord = new MessageEmbed()
                .setDescription("**__Serveur Discord__**")
                .addField("Bot", "• En construction", true)
                .addField("Serveur", "• Opérationnel", true)
                .addField("Modération", "• Recrutement ouvert", true);

            const embedSupport = new MessageEmbed()
                .setDescription("**__Support__**")
                .addField("Discord", "• Ouvert de 16h à 22h le lundi, mardi, jeudi et vendredi\n• Ouvert de 14h à 22h le mercredi\n• Ouvert de 9h à 19h le samedi", true)
                .addField("Ligne téléphonique", "• Ouvert de 16h à 22h le lundi, mardi, jeudi et vendredi\n• Ouvert de 14h à 22h le mercredi\n• Ouvert de 9h à 19h le samedi", false)
                .addField("Live Chat", "• Indisponible", true)
                .addField("Ticket manager", "• Indisponible", true);

            const embedSite = new MessageEmbed()
                .setDescription("**__Site__**")
                .addField("www.nordkey.net", "• Opérationnel", false)
                .addField("manager.nordkey.net", "• Indisponible", true)
                .addField("plesk.nordkey.net", "• Indisponible", true)
                .addField("www.nordkey-dev.cf", "• Opérationnel", false)
                .addField("manager.nordkey-dev.cf", "• Indisponible", true)
                .addField("plesk.nordkey-dev.cf", "• Opérationnel", true)
                .setFooter("© 2021 NordKey | Tous droits réservés.");

            message.guild.channels.cache.find(c => c.id === '801898583997284372').send(embed);
            message.guild.channels.cache.find(c => c.id === '801898583997284372').send(embedServices);
            message.guild.channels.cache.find(c => c.id === '801898583997284372').send(embedDiscord);
            message.guild.channels.cache.find(c => c.id === '801898583997284372').send(embedSupport);
            message.guild.channels.cache.find(c => c.id === '801898583997284372').send(embedSite);
        } else {
            message.channel.send("Vous n\'avez pas les permissions sufisantes");
        }
    }
}