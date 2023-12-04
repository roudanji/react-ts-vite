import { ReadonlyProperties } from "@/@types/publicType";
import { nanoid } from "nanoid";
import { atom } from "recoil";

type DateType = ReadonlyProperties<{
  id: string;
  label: string;
  value: number;
}>;

export const date = atom({
  key: "date",
  default: [
    { id: nanoid(), label: "1月", value: 1 },
    { id: nanoid(), label: "2月", value: 2 },
    { id: nanoid(), label: "3月", value: 3 },
    { id: nanoid(), label: "4月", value: 4 },
    { id: nanoid(), label: "5月", value: 5 },
    { id: nanoid(), label: "6月", value: 6 },
    { id: nanoid(), label: "7月", value: 7 },
    { id: nanoid(), label: "8月", value: 8 },
    { id: nanoid(), label: "9月", value: 9 },
    { id: nanoid(), label: "10月", value: 10 },
    { id: nanoid(), label: "11月", value: 11 },
    { id: nanoid(), label: "12月", value: 12 },
  ] as DateType[],
});

// import { date } from "@/recoil-stroe/date";
// import { useRecoilValue } from "recoil";
// const currentDate = useRecoilValue(date);
// console.log("currentDate", currentDate);
