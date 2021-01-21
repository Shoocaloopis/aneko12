const Discord = require('discord.js')

const ainasepics = require("ainasepics")

module.exports.help ={
    name: "kiss"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setImage(ainasepics.kiss())
    .setTimestamp()
    message.channel.send(embed)
}