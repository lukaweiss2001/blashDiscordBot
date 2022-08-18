const Discord = require("discord.js")

const TOKEN = "MTAwOTA3NjEyMjUyMjIzNDkxMA.GaDp9A.jFFzRn1ZylqMWFTE-ux8EcLYrtuJPRvclCxWjg"

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

let bot = {
    client,
    prefix: "><",
    owners: ["985514018997432390"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot