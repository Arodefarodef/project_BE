import cors from "cors";
import express, { Application } from "express";
import { IncomingMessage, ServerResponse, Server } from "node:http";

const PORT: number = 3354;

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

mainApp(app);

const server: Server<typeof IncomingMessage, typeof ServerResponse> =
  app.listen(PORT, () => {
    console.log();
    dbConfig();
  });

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);

  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
function mainApp(app: express.Application) {
  throw new Error("Function not implemented.");
}

function dbConfig() {
  throw new Error("Function not implemented.");
}

