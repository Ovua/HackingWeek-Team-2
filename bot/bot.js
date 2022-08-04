const Discord = require('discord.js');
const dotenv = require('dotenv')
dotenv.config()
const fetch = require("node-fetch")
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const prefix = "/"

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`) 
  })

// funzione di sicurezza sui conflitti con altri bot
function securityMention() {
	client.on("message",  (msg) => {
		if (msg.content.includes("@here")  //con questa funzione si evita di chiamare il BOT attraverso suffissi come "here" / "everyone / reply
		|| msg.content.includes("@everyone") 
		|| msg.type == "REPLY") 
        return false;
    })
}

securityMention()


// funzione aggiuntiva alla task - informazioni e sessione help del bot 
function Info() {
const mentionBot = msg.mentions.has(client.user.id)
const embed = new Discord.MessageEmbed()
        .setTitle('Command List ')
        .setColor('#98FB98')
        .addFields(
            {
name:"`  - /articles ⇒ ritorna gli ID tutti gli articoli\n - /articles/authors ⇒ lista degli autori\n - /articles/{id} ⇒ ritorna il testo dell'articolo\n `",
value:"` Inserisci /info per visualizzare questo elenco\n Inserisci /who per scoprrire chi sono \n Inserisci /version per scoprrire la versione del Bot `"
        })
            
   //per evitare conflitti con altri bot, le info verranno stampate solo se il bot e' menzionato 
    if (mentionBot && msg.content.includes(prefix+'help')) { // due comandi info ed help 
			msg.reply(embed);
    } else if (mentionBot && msg.content.includes(prefix+'who')) { // informazioni relative all developer
			msg.reply('Developed by Ivan Puddighinu')
	} else if (mentionBot && msg.content.includes(prefix+'version')) { //informazioni relative alla versione
			msg.reply('Version: 0.1.0')
			
		}
	}

Info()

// bot come da task //

// fetch dell'api
fetch ('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => res.json())
     .then(data => {
        const articles = data.forEach(article => {
        const id = (article.id) 
        const authors = (article.newsSite) 
        Author.push(authors)
        IDs.push(id)
    })
});
let Author = []
let IDs = []


// => /articles/
function articlesID() {
if (msg.content.toLowerCase() === prefix+'articles') {  //nel caso di comandi maiuscoli li trasforma in minuscolo e se sono identici
            await msg.reply('Lista degli ultimi 10 articoli:')
                await msg.channel.send(IDs)
                    .catch(e => msg.reply("Bot Error on ID's"));
        } 
    };
articlesID()

// /articles/authors
function articleAuthors() {
    if (msg.content.toLowerCase() === prefix+'articles/authors') {
                await msg.reply('Lista degli ultimi 10 Autori e relativi ID:')
                await msg.channel.send(Author)
                    .catch(e => msg.reply("Bot Error on Authors"));
            }
        };
articleAuthors()


// /articles/{id}
function summaryID() {
const numero = IDs.some(num => msg.content.includes(num))  //controllo se il numero e' presente all'interno dell'array IDS
         
	if (numero && msg.content.toLowerCase().includes(prefix+'articles')) { 
        const args = msg.content.slice(prefix.length).trim().split(/articles/); //split articles perevitare conflitti nel fetch
        const command = args.shift();
            fetch('https://api.spaceflightnewsapi.net/v3/articles' + args)
            .then(res => res.json())
            .then(data => {
                let summary = (data.summary) 
                    msg.reply('Sommario:')
                    msg.channel.send(summary)
                        .catch(e => msg.reply("Bot Error on Summary"));
            }) 
	    } 
    };
summaryID()


client.login(process.env.TOKEN);
  




