
# Hacking Week Challenge - Team 2 (SpaceDose) 

##  Organizzazione e metodo 🗄️

Ciao a tutti dal Team 2, ci siamo organizzati creando un progetto iniziale su Github, in cui attraverso una Kanban è stato stabilito 
e organizzato il da farsi. Sono stati creati degli issues ed ogni sezione è stata divisa in diverse parti e assegnata 
ai corrispettivi membri del team. Abbiamo stabilito sia i merge che i commit sino ad arrivare alle classi della WebApp.
Ci siamo incontrati per lo scrum giornaliero attraverso il Server discord del team, sino ad arrivare alla milestone deffinita nella kanban!


- La documentazione da noi stabilita è visibile qua: [Team 2](https://github.com/Ovua/HackingWeek-Team-2/issues/9)
- Questo è il link del nostro progetto: [Kanban](https://github.com/users/Ovua/projects/6)
- Documentazione della challenge: [Develhope](https://winter-bush-e31.notion.site/Challenge-Hacking-Week-FS4-a48fb8c37dd44f9a92865858d5ca692a)

## Autori 👩‍💻👨‍💻

- [@AliceStivali](https://github.com/AliceStivali)
- [@FedericoMulas](https://github.com/FedericoMulas8)
- [@FrancescoMFerri](https://github.com/Francxmf)
- [@IvanPuddighinu](https://github.com/ovua)

##  GitFiles 📁
Abbiamo utilizzato file come .env per nascondere i token relativi al Bot ed è stato inserito un file .gitignore per evitare il pull di folder quali:
node-modules, scss.map ed env
 ### API Utilizzate
- [Spaceflight News API](https://spaceflightnewsapi.net/)
- [FullCalendar](https://fullcalendar.io)
- [Chart.js](https://www.chartjs.org/)
- [Discord.js](https://discord.js.org/#/)


## Site Features 🌐

- Calendario
- Articoli
- Chart
- Responsività
- Light/Dark mode 

Il sito è stato creato in seguito a uno studio di layout isometrico attraverso le icone bootstrap, diviso in molteplici componenti per
creare l'effetto isometrico/3D, ogni elemento è stato separato per livelli di colorazione, successivamente sono state inserite funzioni Javascript
per permettere la possibilità di aggiungere la feature Dark-mode e le rispettive variazioni sul layout.
E' stato scelto un layout di questo tipo che permettesse l'utilizzo di bootstrap come da task senza escludere il lato creativo, il risultato è un layout personalizzato e dinamico.


Le features sono collegate attraverso HTML/SCSS/Javascript, si è scelto un metodo a moduli esterni per quanto riguarda le diverse task richieste (Calendar/Table/Chart) in maniera tale da tenere un ordine specifico che permettesse di valutare in maniera ordinata le funzionalità.




## Bot Discord 🤖
Il nostro Bot si chiama SpaceNews

Features:
- /articles ⇒ ritorna gli ID tutti gli articoli
- /articles/authors ⇒ lista di autori degli articoli
- /articles/{id} ⇒ ritorna il testo dell’articolo
- @SpaceNews /info ⇒ per visualizzare questo elenco
- @SpaceNews /who ⇒ per scoprrire chi sono 
- @SpaceNews /version ⇒ versione del Bot




### Installazione Bot ‍💻

Clona il progetto

```bash
  git clone https://github.com/Ovua/HackingWeek-Team-2.git
```

Vai nella cartella del bot

```bash
  cd HackingWeek-Team-2/Bot
```

Installa le dependencies

```bash
  npm install fetch-node@2
  npm install discord.js
```

Crea un file .env con il tuo discord Token

```bash
TOKEN=codiceToken
```
Runna il bot
```bash
node bot.js
```

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

