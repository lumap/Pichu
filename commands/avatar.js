module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'utility',
	description: 'Shows user avatar',
	execute(client,message,args) {
let user = client.users.get(args.join(' ')) || message.mentions.users.first() || message.author 

        const Discord = require('discord.js')
            let avatar = user.avatarURL
            let avataremb = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            message.channel.send(avataremb)
        

	},
};
