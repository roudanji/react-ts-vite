import request from "@/utils/request";

export const testDelete = (id: number): Promise<any> =>
  request.delete(`/delete/interface/${id}`);
