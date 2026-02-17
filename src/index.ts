import express, { type Request, type Response } from "express";
import messagesRouter from "./routes/messages.routes.js";
import { PORT } from "./constants/constants.js";

const app = express();

app.use(express.json());
app.use("/messages", messagesRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send({ error: "not found" });
});

const run = () => {
  app.listen(PORT, () => {
    console.log(`Server: ${PORT}`);
  });
};

run();
