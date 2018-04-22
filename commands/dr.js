const responses = [
  'https://imgur.com/J7Z07sa', 'https://www.csgolive.com/assets/images/imgur/QJqPIoT.png', 'https://www.csgolive.com/assets/images/imgur/rWB7nXz.png', 'https://www.csgolive.com/assets/images/newCases/official_weapons/M4A4Gun.png', 'https://www.csgolive.com/assets/images/newCases/official_weapons/GlockGun.png'
]
const Discord = require('discord.js')
exports.run = (client, message, params) => {
  message.delete();
  let user = message.mentions.users.first();
let modRole = message.guild.roles.find("name", "dr");
if(!message.member.roles.has(modRole.id)) return message.channel.send('', {embed: {
    color: 0xb20000,
    title: 'Error',
    description: "You need rank DR to get DailyReward"
  }});
  let skin = `${responses[Math.floor(Math.random() * responses.length)]}`
  const embed = new Discord.RichEmbed()
  .setAuthor("DailyRewards")
  .setColor('RANDOM')
  .setDescription(`Congrats  ${message.author.username}#${message.author.discriminator} for winning a skin From DailyRewards`)
  .setFooter("DailyRewards skin")
  .setImage(skin)
  .setTimestamp()
  message.channel.send({embed});
};
exports.conf = {
  aliases: [],
};
exports.help = {
  name: 'dr',
  description: 'dr command',
  usage: 'free items'
};
