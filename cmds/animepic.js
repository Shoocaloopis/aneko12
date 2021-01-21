const Discord = require('discord.js')

const anime = require('random-anime')

module.exports.help ={
    name: "animepic"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setImage(anime.anime())
    .setTimestamp()
    message.channel.send(embed)
}