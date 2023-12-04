import { ResponseType } from "@/@types/publicType";
import request from "@/utils/request";

export const testDelete = (id: number): Promise<ResponseType> =>
  request.delete(`/delete/interface/${id}`);

export const test = <T>(data: T): T => {
  return data;
};
