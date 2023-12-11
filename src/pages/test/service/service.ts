import { ResponseInterfaceReturnedValue } from "@/@types/publicType";
import request from "@/utils/request";

export const testDelete = (
  id: number,
): Promise<ResponseInterfaceReturnedValue> => {
  return request.delete(`/delete/interface/${id}`);
};
