import express from "express";
import messagesRouter from "./routes/messages.routes.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/messages", messagesRouter);

const run = () => {
  app.listen(port, () => {
    console.log(`Server: ${port}`);
  });
};

run();
