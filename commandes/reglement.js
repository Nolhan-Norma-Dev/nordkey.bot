const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reglement',
    description: 'Affiche le règlement',
    excute(client, message, args) {

        if (message.author == "610448055346397194") {
            message.delete().catch();
            const embed = new MessageEmbed()
                .setAuthor("Règlement Discord - NordKey", client.user.displayAvatarURL(), "https://nordkey.net")
                .setColor("#20201e")
                .setDescription("Internet et les réseaux sociaux sont des espaces de liberté ou chacun peut communiquer, partager, apprendre et s’épanouir.\nVos droits doivent être respectés, ainsi pour construire un espace d’échanges sur ce discord, nous instaurons un règlement.\nNous estimons que chaque personne rejoignant notre discord accepte le règlement et accepte de le respecter sous peine de sanction.")
                .addField("• Préface ➢", "La liberté de l’expression, de la pensée et de la critique sont des droits fondamentaux que nous défendons. Ainsi nous exigeons que nos utilisateurs adoptent une communication non-violente et responsable, en conformité avec le règlement ci-dessous.")
                .addField("• Article 1 ➢", "Il est interdit d'insulter. Si vous êtes surpris à insulter ou qu'un membre s'en plaint (avec preuves), vous vous verrez sanctionné en fonction de la gravité.")
                .addField("• Article 2 ➢", "Envoyer des messages à caractère diffamatoire, raciste, antisémite, xénophobe, sexuel, homophobe, agressif ou injurieux se verra BAN du serveur.")
                .addField("• Article 3 ➢", "Toute publicité non autorisée diffusée sur le Discord, pour un serveur Discord, un concours, un recrutement, etc, sera sanctionnée. Toutes publicité non autorisé par la personne, envoyer en MP sera également sanctionné !")
                .addField("• Article 4 ➢", "Il est interdit de spam ainsi que de flood dans le textuel . Vous serez sanctionné en fonction de l'acte commis.")
                .addField("• Article 5 ➢", "Toute provocation abusive se verra sanctionnée.")
                .addField("• Article 6 ➢", "Il est interdit de mettre une image de type sexuelle, raciste, provocatrice ou insultante sur votre avatar Discord.")
                .addField("• Article 7 ➢", "Il est interdit de mettre des réactions abusivement et inutilement.")
                .addField("• Article 8 ➢", "Le Staff se réserve le droit d'interpréter et d'appliquer le règlement selon son jugement")
                .addField("• Note Finale ➢", "Cette liste d’articles non-exhaustifs, peut être modifié par notre équipe à tout moment, veuillez donc vous y référer constamment.\nSi vous ne comprenez pas un article de ce règlement, veuillez en faire part à un membre du pôle modération qui pourra vous expliquer plus en détails l’article en question.\n\nCordialement, L\'équipe de NordKey")
                .setFooter("© 2021 NordKey | Tous droits réservés.");

            message.guild.channels.cache.find(c => c.id === '748957918291951779').send(embed);
        } else {
            message.channel.send("Vous n\'avez pas les permissions sufisantes");
        }
    }
}