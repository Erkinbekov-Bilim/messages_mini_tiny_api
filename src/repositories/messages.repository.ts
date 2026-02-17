import { readFile, writeFile, readdir } from "fs/promises";
import type { IMessage, IMessageMutation } from "../types/message.type.js";
import { MESSAGES_PATH } from "../constants/constants.js";



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

  async getMessages() {
    const files = await readdir(MESSAGES_PATH);
    const limitFiles = files.slice(-5);

    const promises: Promise<IMessage>[] = limitFiles.map(async (file) => {
      const fileContent: Buffer = await readFile(`${MESSAGES_PATH}/${file}`);
      const data: IMessage = JSON.parse(fileContent.toString());
      return data;
    });
    
    const messages: IMessage[] = await Promise.all(promises);
    return messages;
  },
};

export default productsFileStorage;
