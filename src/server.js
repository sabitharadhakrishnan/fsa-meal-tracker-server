import express from "express";
import { routes } from "./routes/index";
import { db } from "./db";

const app = express();

//in order POST request to receive req body and parse it
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.conect("mongodb://127.0.0.1:27017");
  await app.listen(8080);
  console.log("server is listening on port 8080");
};

start();
