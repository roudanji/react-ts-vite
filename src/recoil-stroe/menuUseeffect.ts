import { atom, RecoilState } from "recoil";

export const menuUseeffect: RecoilState<boolean> = atom({
  key: "menuUseeffect",
  default: true,
});

// import { menuUseeffect } from "@/recoil-stroe/menuUseeffect";
// import { useRecoilValue } from "recoil";
// const currentMenuUseeffect = useRecoilValue(menuUseeffect);
// console.log("currentMenuUseeffect", currentMenuUseeffect);
