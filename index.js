const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();


client.once('ready', () => {
    console.log(`Bot Onlin Shod Azizakam`);
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("918463663961153588")
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()
        if (member.user) {

            if (member.user.client) {

                welcomeEmbed.setColor(colors.black)
                welcomeEmbed.setAuthor('X Learn', 'https://cdn.discordapp.com/attachments/909397094186508288/914876489298747422/logo.gif', 'https://idpay.ir/xlearn')
                welcomeEmbed.setDescription(` سلام  <@${member.user.id}>  خوش آمدی عزیزکم `)
                welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
                welcomeEmbed.setFooter(' X Learn  ', 'https://cdn.discordapp.com/attachments/909397094186508288/914876489298747422/logo.gif');
                welcomeChannel.send(welcomeEmbed)
            }
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})

console.log(`

																			   
		██╗  ██╗    ██╗     ███████╗ █████╗ ██████╗ ███╗   ██╗ 				   
		╚██╗██╔╝    ██║     ██╔════╝██╔══██╗██╔══██╗████╗  ██║				   
		 ╚███╔╝     ██║     █████╗  ███████║██████╔╝██╔██╗ ██║				   
		 ██╔██╗     ██║     ██╔══╝  ██╔══██║██╔══██╗██║╚██╗██║				   
		██╔╝ ██╗    ███████╗███████╗██║  ██║██║  ██║██║ ╚████║				   
		╚═╝  ╚═╝    ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝				   
																			   
	Discord: https://discord.gg/g3QpZc7vXh	||	 My Web : amirhossinrashid.ir
																	 `);

// <---------------------->
client.login(botconfig.token);