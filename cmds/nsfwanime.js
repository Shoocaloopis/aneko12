const Discord = require('discord.js')

const anime = require('random-anime')

module.exports.help ={
    name: "nsfwanime"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())

    .setImage(anime.nsfw())
    .setTimestamp()
    message.member.send(embed)
    const embed2 = new Discord.MessageEmbed()
    .setColor(randomHexColor())
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setTitle("Check Your DMs")
    .setDescription("I have sent you the anime nsfw picture in DMs because this server might not allow nsfw")
    .setTimestamp()
    message.channel.send(embed2)
}