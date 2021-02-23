const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin-pass',
    description: 'Affiche les mots de passes des infrastructures NordKey',
    excute(client, message, args) {

        if (message.author == "610448055346397194") {
            message.delete().catch();
            const embed = new MessageEmbed()
                .setAuthor("Adminstration Connecxion - NordKey", client.user.displayAvatarURL(), "https://nordkey.net")
                .setColor("#20201e");

            const embedMail1 = new MessageEmbed()
                .setDescription("**__Mail www.nordkey-dev.cf__**")
                .addField("E-Mail de contact : contact@nordkey-dev.cf", "Boite E-Mail : (https://webmail.nordkey-dev.cf/roundcube/index.php?_user=contact%40nordkey-dev.cf)[Y aceder !]")
                .addField("Nom d’utilisateur :", "contact@nordkey-dev.cf", true)
                .addField("Mots de Passe :", "xe82#gT6", true)
                .addField("E-Mail de contact : web-master@nordkey-dev.cf", "Boite E-Mail : (https://webmail.nordkey-dev.cf/roundcube/index.php?_user=web-master%40nordkey-dev.cf)[Y aceder !]")
                .addField("Nom d’utilisateur :", "web-master@nordkey-dev.cf", true)
                .addField("Mots de Passe :", "xe82#gT6", true);

            const embedMail2 = new MessageEmbed()
                .setDescription("**__Mail www.nordkey.net__**")
                .addField("E-Mail de contact : contact@nordkey.net", "Boite E-Mail : (https://webmail.nordkey.net/roundcube/index.php?_user=contact%40nordkey.net)[Y aceder !]")
                .addField("Nom d’utilisateur :", "contact@nordkey.net", true)
                .addField("Mots de Passe :", "i7920Mx320", true);

            const embedMailChimp = new MessageEmbed()
                .setDescription("**__Mail www.nordkey.net__**")
                .addField("E-Mail de contact : nordkey.dev@gmail.com", "Boite E-Mail : (https://login.mailchimp.com/signup/)[Y aceder !]")
                .addField("Nom d’utilisateur :", "NordKeys", true)
                .addField("Mots de Passe :", "Ax2whZvKFTc-nL9", true);

            const embedPannelPlesk1 = new MessageEmbed()
                .setDescription("**__Pannel Revendeur Plesk Alpha (1) :__**")
                .addField("Nom d’utilisateur :", "tassusbh", true)
                .addField("Mots de Passe :", "_2bA3Y3_h7MjwZ", true);

            const embedPannelPlesk2 = new MessageEmbed()
                .setDescription("**__Pannel Revendeur Plesk Alpha (2) :__**")
                .addField("Nom d’utilisateur :", "lfldadky", true)
                .addField("Mots de Passe :", "HznWi206P3H!y~", true);

            const embedAdminNordKey = new MessageEmbed()
                .setDescription("**__Identifiant Administration nordkey :__**")
                .addField("Nom d’utilisateur :", "Admins_NordKey", true)
                .addField("Mots de Passe :", "N0507", true);

            const embedPaypal = new MessageEmbed()
                .setDescription("**__Identifiant Administration nordkey :__**")
                .addField("Lien paypal :", "https://paypal.me/nordkey", true)
                .addField("Nom d’utilisateur :", "contact@nordkey.net", true)
                .addField("Mots de Passe :", "i7920Mx320", true);

            const embedInfo1 = new MessageEmbed()
                .setDescription("www.nordkey-dev.cf\nNolhan Blanchetière & Manolo Nefaut\n9 chemin de la guillaumée 61350 Passais Village\n06 45 21 91 64");

            const embedInfo2 = new MessageEmbed()
                .setDescription("Hébergeur: Association WORLD-HEBERG - RNA: W012014880 - 78 Avenue des Champs-Elysées, Bureau 562, 75008, Paris.\nWORLD-HEBERG ne peut en aucun cas être tenu responsable du contenu de ce site.\nWORLD-HEBERG agit en qualité d'hébergeur.");

            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embed);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedMail1);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedMail2);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedMailChimp);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedPannelPlesk1);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedPannelPlesk2);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedAdminNordKey);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedPaypal);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedInfo1);
            message.guild.channels.cache.find(c => c.id === '802973315785555968').send(embedInfo2);
        } else {
            message.channel.send("Vous n\'avez pas les permissions sufisantes");
        }
    }
}