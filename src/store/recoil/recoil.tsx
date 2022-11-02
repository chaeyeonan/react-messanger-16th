import { atom } from "recoil";
import UserData from "../UserData.json";
import Message from "../Message.json";
import { chatRoom } from "../../interface/chat";

export const currentId = atom<number>({
  key: "currentId",
  default: /*UserData.users*/ 0,
});

export const roomId = atom<number>({
  key: "roomId",
  default: /*UserData.users*/ 1,
});

export const chatList = atom<chatRoom[]>({
  key: "chatList",
  default: Message,
});
