import { isInterfaceSuccess } from "@/utils/utils";
import axios from "axios";
import { selector } from "recoil";

export const userInfo = selector({
  key: "userInfo",
  get: async ({ get }) => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const res = await axios.get("/getuserinfo");
      if (isInterfaceSuccess(res.data.code)) return res.data;
    }
  },
});

// import { userInfo } from "@/recoil-stroe/userInfo";
// import { useRecoilValue } from "recoil";
// const currentUserInfo = useRecoilValue(userInfo);
// console.log("currentUserInfo", currentUserInfo);
