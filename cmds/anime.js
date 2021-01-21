const Discord = require('discord.js')

const ainasepics = require("ainasepics")

module.exports.help ={
    name: "anime"
}
module.exports.run =async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('FF69B4')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setTitle("Invite Me To Your Server!")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=801801144649252865&permissions=67497025&scope=bot")
    .setDescription("Prefix: a!")
    .addField('happy', 'Get a happy anime gif', true)
    .addField('animepic', "Get an anime picture", true)
    .addField('hi', "Get an anime wave gif", true)
    .addField('hug', "Get an anime hug gif", true)
    .addField('kiss', "Get an anime kiss gif", true)
    .addField("nervous", 'Get a nervous anime gif', true)
    .addField('nsfwanime', "Get an nsfw anime picture", true)
    .addField("punch", "Get an anime punch gif", true)
    .addField("run", "Get an anime run gif", true)
    .addField("slap", "Get an anime slap gif", true)
    .setImage(ainasepics.hi())
    .setTimestamp()
    message.channel.send(embed)
}