import express from "express";
import messagesRouter from "./routes/messages.routes.js";
import { PORT } from "./constants/constants.js";

const app = express();

app.use(express.json());
app.use("/messages", messagesRouter);

const run = () => {
  app.listen(PORT, () => {
    console.log(`Server: ${PORT}`);
  });
};

run();
