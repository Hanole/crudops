# CrudOps

## tl;dr

CrudOps er en tjeneste som tilbyr JSON-baserte APIer basert på forskjellige templates. Ut fra miljøvariablene som lagres i `.env` velger APIet riktig template og server JSON-strukturen som et REST-API med full CRUD på alle ressurser.

## Komme i gang

Du må ha Git, Node.js og npm installert på din lokale maskin for å komme i gang med prosjektet. Begynn med å installere disse om du trenger dem. Hver gruppe må lage en fork av dette repositoryet som dere så kan jobbe videre med i gruppa, f.eks om dere ønsker å endre dataene. Når dere har laget en fork, gjør følgende:

+ Start med å klone det forkede repositoryet deres så du har prosjektet lokalt.
+ Navigér deg frem til prosjektmappen i terminalen.
+ Kjør kommandoen `npm install` for å installere alle avhengigheter. 
+ Lag en kopi av fila .env.example og døp den om så den bare heter .env i stedet for. Fyll ut nødvendig informasjon: `TEMPLATE` skal være enten `gatherly.json`, `potepass.json` eller `stay.json`. `API_KEY` kan være hva som helst, men bør bestå av bare bokstaver og tall, ingen mellomrom eller spesialtegn.
+ Kjør kommandoen `npm start` for å starte APIet. Dersom alt er greit, får du ingen feilmeldinger i terminalen.
+ Åpne nettleseren og gå til [localhost:3000](http://localhost:3000). Her får du opp APIets dokumentasjonsside der du kan lese mer om strukturer og lignende.