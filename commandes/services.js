const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'services',
    description: 'Affiche les services prooposés par NordKey',
    excute(client, message, args) {

        if (message.author == "610448055346397194") {
            message.delete().catch();
            const embed = new MessageEmbed()
                .setAuthor("Nos Services & Offres - NordKey", client.user.displayAvatarURL(), "https://nordkey.net")
                .setColor("#20201e")
                .setDescription("Découvrez notre large gamme de services et d'offres Web, Discord, Média, VPS et TeamSpeak !")
                .addField("Web", "• Hébergement Web Plesk\n• Création de site Web\n• Noms de Domaine\n• Adresses E-Mail")
                .addField("Discord", "• Création Serveur Discord\n• Création Bot Discord\n• Hébergement Bot Discord\n• Bot NordKey.Musique")
                .addField("Média", "• Tous types de Design\n• Montage Vidéos et Photos\n• Aide à la gestion de communauté")
                .addField("VPS", "• Bientôt Disponible")
                .addField("TeamSpeak", "• Bientôt Disponible")
                .setFooter("© 2021 NordKey | Tous droits réservés.");

            message.guild.channels.cache.find(c => c.id === '801897983586992208').send(embed);
        } else {
            message.channel.send("Vous n\'avez pas les permissions sufisantes");
        }
    }
}