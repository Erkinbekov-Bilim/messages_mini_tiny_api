import { readFile, writeFile } from "fs/promises";
import type { IMessage, IMessageMutation } from "../types/message.type.js";

const productsFileStorage = {
  async createMessage(message: IMessageMutation) {
    const date: Date = new Date();
    const dateTime: string = date.toISOString();

    const newMessage: IMessage = {
      ...message,
      datetime: dateTime,
    };
    await writeFile(
      `src/messages/${Date.now()}.txt`,
      JSON.stringify(newMessage),
    );
    return newMessage;
  },
};

export default productsFileStorage;
