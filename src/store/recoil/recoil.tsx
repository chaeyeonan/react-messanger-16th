import { atom } from "recoil";
import UserData from "../UserData.json";
import Message from "../Message.json";

export const currentId = atom<number>({
  key: "currentId",
  default: /*UserData.users*/ 1,
});

export const chatList = atom<any>({
  key: "chatList",
  default: Message,
});
