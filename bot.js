const Discord = require('discord.js')
const bot = new Discord.Client()
const {prefix, token} = require('./config.json')
const fs = require('fs')

bot.commands = new Discord.Collection()
bot.prefix = prefix
fs.readdir("./cmds", (err, files) => {
    if(err) throw err
    
    let jsfiles = files.filter(f => f.split(".").pop() === 'js')

    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        bot.commands.set(props.help.name, props)
    })
    console.log(`Loaded ${files.length} commands.`)
})

String.prototype.capitalize = function(allWords) {
    if (allWords)
    return this.split(/ +/g)
    .map(
        str => str.charAt(0).toUpperCase() + str.toLowerCase().substring(1).join(" ")
    )
    else return this.toLowerCase().charAt() + this.toLowerCase(0).substring(1)
}

bot.on('ready', () => {


    console.log(`${bot.user.username} Is Online!`)
    let statuses = [
        'a!anime'
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {
            type: 'LISTENING'
        });
    }, 1000)
})

bot.on('message', async (message) => {
    if(message.author.bot) return
    
    if(message.content.startsWith(prefix)) {
        let args = message.content
        .substring(prefix.length)
        .trim()
        .split(/ +/g)

        let messageArray = message.content.split(" ")
        let cmds = messageArray[0].toLowerCase()

        let cmd = bot.commands.get(args[0].toLowerCase()) || bot.commands.get(bot.aliases.get(cmds.slice(prefix.length)))

        if(cmd) cmd.run(bot, message, args)
    
}
})

bot.login(token)