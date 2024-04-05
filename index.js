const express = require("express");
const app = express();

app.listen(() => console.log("Bad Start Go Go ...."));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "!"; ///ضع هنا البريفيكس الخاص ببوتك
///Put Here Prefix Of Ur Bot
var status = [`Bot Gifts `, `Bot Gifts`];
const botowler = ["1114155539820187718"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`This Bot Maked By : El.Matador`);
  client.user.setStatus("dnd");
  var time = Math.floor(5000);
  setInterval(function() {
    var lengthesof = status.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(status[amounter], { type: "" });
  }, time);
});


client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "help".toLowerCase())) {
    let help = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`
  > **${client.user.username} Help Cmds\n> Commands : " 6 " \n> Prefix : \`${prefix}\`**\n

      Broadcast Cmds :

      \`${prefix}bc\` , \`${prefix}obc\`, \`${prefix}ping\`
      
      Owners Cmds : 

      \`${prefix}changename\` , \`${prefix}changeavatar\`
      

      Other :

      \`${prefix}addme\` , \`${prefix}about\`

      `
      )
    message.channel.send(help);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`\`Write Something To Send\`
    
    [Sub In Bad Channel](https://bit.ly/3wXa5lB)
    
    `);
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache
      .forEach(m => {
        if (m.user.bot) return;
        m.send(`${args}\n ${m}`)
     
          .then(() => {
            console.log(`I Send To : ${m.user.tag} ✅`);
          })
          .catch(function() {
            console.log(`I Dont Send To : ${m.user.tag} ❌ `);
          });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `📬 : Send To : \`${message.guild.memberCount}\` `
      )
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`...`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "obc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
     .setTitle(`${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`\`Write Something To Send\`
    
    [Sub In Bad Channel](https://bit.ly/3wXa5lB)
    
    `);
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        if (m.user.bot) return;
        m.send(`${args}\n ${m}`)
          .then(() => {
            console.log(`I Send To : ${m.user.tag} ✅`);
          })
          .catch(function() {
            console.log(`I Dont Send To : ${m.user.tag} ❌ `);
          });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `📬 : Send To : \`${
          message.guild.members.cache.filter(
            m => m.presence.status !== "offline"
          ).size
        }\` `
      )
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`...`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("...").then(m => {
      m.edit(
        `\`\`\`javascript\nPing : ${Math.round(
          client.ws.ping
        )} ms\n\`\`\` `
      );
    });
  }
   if (message.content.startsWith(prefix + "addme")) {
    message.channel.send("...").then(m => {
      let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle(`Invite Me`)
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
       .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
      m.edit(embed
      );
    });
  }
});


client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "about".toLowerCase())) {
    let about = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        `**Hello**

      This Is A Simple Bot Of Broadcast Was Maked Dev 𝟕𝐚𝐫𝐟𝐨𝐬𝐡#3898

      This Is Version 4.0

      Is Beta , Soon Well Update Bot To 4.1 And 4.2

      If You Want See Last Update Just

      Go To Bad Channel And See Last News Of Bot

      __Enjoy__...
      
      `
      )
    message.channel.send(about);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "changename")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!botowner.includes(message.author.id))
      return message.channel.send(
        `** :x: Only Owners Can   Use this Command **`
      );
    if (!botnameee)
      return message.channel.send(
        `**Please Write Like This :
        
Ex : \`${prefix}changename NiceOne\`
        **`
      );
    client.user.setUsername(`${botnameee}`);
    message.channel.send(`...`).then(me => {
      me.edit(` Done !`);
    });
  }
  if (message.content.startsWith(prefix + "changeavatar")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!botowner.includes(message.author.id))
      return message.channel.send(
        `** :x: Only Owners Can   Use this Command **`
      );
    if (!botnameee)
      return message.channel.send(
        `**Please Write Like This :
        
Ex : \`${prefix}changeavatar + Link Of Avatar\`
        **`
      );
    client.user.setAvatar(`${botnameee}`);
    message.channel.send(`...`).then(me => {
      me.edit(` Done !`);
    });
  }

});

`js
function restart() {
  console.log('Restarting the application...');
  // حقوق عبكريم... 
}

setInterval(restart, 60 * 1000); // يسوي رن كل دقيقه يعني ما يطفى

`

client.login(process.env.token);