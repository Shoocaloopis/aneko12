const Discord = require('discord.js')

const ainasepics = require("ainasepics")

module.exports.help ={
    name: "happy"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setTimestamp()
    .setImage(ainasepics.happy())
    message.channel.send(embed)
}