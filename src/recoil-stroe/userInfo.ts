import { ReadonlyProperties } from "@/@types/publicType";
import { atom } from "recoil";

type UserInfo = ReadonlyProperties<{
  username: string;
  role: string;
  sex: string;
  age: number;
  jurisdiction: Array<string>;
}>;

const userInfoObj = {
  username: "",
  role: "",
  sex: "",
  age: "",
  jurisdiction: [""],
};

export const userInfo = atom({
  key: "userInfo",
  default: userInfoObj || ({} as UserInfo),
});

// import { userInfo } from "@/recoil-stroe/userInfo";
// import { useRecoilValue } from "recoil";
// const currentUserInfo = useRecoilValue(userInfo);
// console.log("currentUserInfo", currentUserInfo);
