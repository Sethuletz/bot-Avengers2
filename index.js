const Discord = require('discord.js')
const { prefix, token} = require('./config.json')
const client = new Discord.Client()


client.once('ready',() => {
    console.log(`${client.user.username} este on! Toate comenzile sunt pregatite`)
})

client.on('message', message => {
    if(message.content.startsWith(`${prefix}kick`)) {
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("```Nu ai permisiunea sa folosesti aceasta comanda!```")
        }
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("**Nu am permisiunea pentru a folosi aceasta comanda!**")
        }
        let target = message.mentions.members.first();
        if(!target) {
            return message.channel.send("```!kick <discord.tag>```")
        }
        if(target.id === message.author.id) {
            return message.channel.send("**Nu poti sa iti dai kick singur :)**")
        }
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${target} cu id-ul (${target.id})`)
            .setColor("RED")
            .setFooter(`A primit kick de la ${message.author.username}`);
            message.channel.send(embed)
        })
    }
})

client.on('message', message => {
    if(message.content.startsWith(`${prefix}ban`)) {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("```Nu ai permisiunea sa folosesti aceasta comanda!```")
        }
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("**Nu am permisiunea pentru a folosi aceasta comanda!**")
        }
        let target = message.mentions.members.first();
        if(!target) {
            return message.channel.send("```!ban <discord.tag>```")
        }
        if(target.id === message.author.id) {
            return message.channel.send("**Nu poti sa iti dai ban singur :)**")
        }
        let member = message.mentions.members.first();
        member.ban().then((member) => {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${target} cu id-ul (${target.id})`)
            .setColor("RED")
            .setFooter(`A primit ban de la ${message.author.username}`);
            message.channel.send(embed)
        })
    }
})


client.login(token)

