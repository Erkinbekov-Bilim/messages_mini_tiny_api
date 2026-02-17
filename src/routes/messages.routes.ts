import express from "express";
import type { Request, Response } from "express";
import type { IMessage, IMessageMutation } from "../types/message.type.js";
import messagesFileStorage from "../repositories/messages.repository.js";

const messagesRouter = express.Router();

messagesRouter.post("/", async (req: Request, res: Response) => {
  const messageData: IMessageMutation = req.body;

  if (!messageData.message) {
    return res.status(400).send({ error: "please enter your message" });
  }

  const newMessage: IMessageMutation = {
    message: messageData.message,
  };

  const message: IMessage = await messagesFileStorage.createMessage(newMessage);

  return res.send(message);
});

messagesRouter.get("/", async (req: Request, res: Response) => {
  const messages = await messagesFileStorage.getMessages();
  return res.send(messages);
});

export default messagesRouter;
