const Discord = require('discord.js')

const ainasepics = require("ainasepics")

module.exports.help ={
    name: "hug"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setImage(ainasepics.hug())
    .setTimestamp()
    message.channel.send(embed)
}