import express, { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});