import { createTRPCRouter, publicProcedure } from "n/server/api/trpc";
import {request} from 'n/utils/fetch'
import { z } from "zod";

export type Course = {
    id: number,
    name: string,
    coordinator: string,
    duration: number,
    created_at?: string,
    updated_at?: string
}

export const courseRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const res = await request<Course[]>('http://127.0.0.1:8000/api/courses')
      return res;
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({input}) => {
      const res = await request<Course>(`http://127.0.0.1:8000/api/courses/${input}`)
      return res;
    }),
});





