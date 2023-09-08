import { createTRPCRouter, publicProcedure } from "n/server/api/trpc";
import {request} from 'n/utils/fetch'
import { z } from "zod";

export type Book = {
    id: number,
    title: string,
    subtitle: string,
    isbn: string,
    place: string,
    year: number,
    image: string,
    publisher_id: number,
    author_id:number,
    created_at?: string,
    updated_at?: string
}

export const bookRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const res = await request<Book[]>('http://127.0.0.1:8000/api/books')
      return res;
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({input}) => {
      const res = await request<Book>(`http://127.0.0.1:8000/api/books/${input}`)
      return res;
    }),
});





