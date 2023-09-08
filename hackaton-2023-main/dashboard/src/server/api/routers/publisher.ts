import { createTRPCRouter, publicProcedure } from "n/server/api/trpc";
import {request} from 'n/utils/fetch'
import { z } from "zod";

export type Publisher = {
    id: number,
    name: string,
    address: string,
    city: string,
    uf: string,
    phone: number,
    created_at?: string,
    updated_at?: string
}

export const publisherRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const res = await request<Publisher[]>('http://127.0.0.1:8000/api/publishers')
      return res;
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({input}) => {
      const res = await request<Publisher>(`http://127.0.0.1:8000/api/publishers/${input}`)
      return res;
    }),
});





