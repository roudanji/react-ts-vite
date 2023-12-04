// import { ReadonlyProperties,ResponseType } from "@/@types/publicType";

// 公用设置只读
export type ReadonlyProperties<TypeData> = {
  readonly [k in keyof TypeData]: TypeData[k];
};

// 公用接口返回 有多余数据使用继承 &
export type ResponseType = {
  code: number;
  message: string;
};
