# CrudOps

## tl;dr

CrudOps er en tjeneste som tilbyr JSON-baserte APIer basert på forskjellige templates. Ut fra miljøvariablene som lagres i `.env` velger APIet riktig template og server JSON-strukturen som et REST-API med full CRUD på alle ressurser.

## Installasjon

1. Klon repoet lokalt.
2. Kjør `npm install` i prosjektet i terminalen. Du må ha installert Node.js og npm på maskina di først.
3. Kopier `.env.example` over til en ny fil kalt `.env` og fyll ut informasjonen. `TEMPLATE` skal tilsvare filnavnet på den filen i `./templates` du ønsker å bruke. `API_KEY` kan være hva som helst så lenge den er fylt ut, men bør være en tilfeldig streng på minst 16 tegn om du skal deploye tjenesten.
4. Kjør `npm start` for å starte APIet.