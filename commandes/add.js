module.exports = {
    name: 'add',
    description: 'Ajouter un rôle',
    excute(client, message, args) {
        let role = message.guild.roles.cache.find(r => r.name === args.toString());

        if (role) {
            if (message.member.roles.cache.has(role.id)) return message.channel.send("> Vous avez déjà ce rôle !");
            if (role.permissions.has('MANAGE_MESSAGES')) return message.channel.send("> Vous ne pouvez pas ajouter ce rôle.");

            message.member.roles.add(role)
            .then(m => message.channel.send(`> Le rôle ***${role.name}*** à bien été ajouter à votre profil.`))
            .catch(e => message.channel.send(`> Le rôle ***${role.name}*** ne peut pas être ajouter, parce qu'il est placé au dessus du mien !`));
        } else {
            message.channel.send(`> Ce rôle n\'existe pas. Ou, je ne l\'ai pas trouvé\n\n> Exemple : \`+add [nom du rôle]\``);
        }
    }
}