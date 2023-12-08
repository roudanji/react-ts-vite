import { ResponseType } from "@/@types/publicType";
import request from "@/utils/request";

export const testDelete = (id: number): Promise<ResponseType> => {
  return request.delete(`/delete/interface/${id}`);
};
