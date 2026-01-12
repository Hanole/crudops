import fs from "fs";
import jsonServer from "json-server";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

if (!process.env.TEMPLATE) {
  console.error("Fatal feil: du må spesifisere en template som skal brukes som en miljøvariabel kalt TEMPLATE. Les dokumentasjonen for mer info.");
  process.exit(1);
}

if (!process.env.API_KEY) {
  console.error("Fatal feil: du må spesifisere en API-nøkkel som skal brukes som en miljøvariabel kalt API_KEY. Les dokumentasjonen for mer info.");
  process.exit(1);
}

if (!fs.existsSync(`./templates/${process.env.TEMPLATE}`)) {
  console.error(`Fatal feil: Den angitte templaten (${process.env.TEMPLATE}) ligger ikke i templates-mappa. Pass på at du bare skriver filnavnet som skal brukes, for eksempel "testdata.json".`);
  process.exit(1);
}

if (!fs.existsSync("./db.json")) {
  console.log("Databasefilen finnes ikke — kopierer fra angitt template.");
  fs.copyFileSync(`./templates/${process.env.TEMPLATE}`, "./db.json");
} 

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((request, response, next) => {
  if (request.method === "GET") {
    next();
  } else {
    if (request.headers["authorization"] === `Bearer ${process.env.API_KEY}`) {
      next();
    } else {
      console.log(request.headers);
      response.status(401).json({message: "Unauthorized - did you remember to use your API key?"});
    }
  }
});

/* Middleware: dersom det er en POST-request, sett createdAt til riktig tid på server */
server.use((request, response, next) => {
  console.log(request.body);
  if (request.method === "POST") {
    request.body.createdAt = new Date().toISOString();
  }
  next();
});

/* Middleware: dersom det er en PUT- eller PATCH-request, sett updatedAt til riktig tid på server */
server.use((request, response, next) => {
  if (request.method === "PUT" || request.method === "PATCH") {
    request.body.updatedAt = new Date().toISOString();
  }
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log(`Starter APIet med template: ${process.env.TEMPLATE} og API-nøkkel ${process.env.API_KEY}.`);
});
