import { atom } from "recoil";
import UserData from "../UserData.json";

export const currentId = atom<any>({
  key: "currentId",
  default: /*UserData.users*/ 1,
});
