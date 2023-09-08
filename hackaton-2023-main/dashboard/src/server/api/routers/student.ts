import { createTRPCRouter, publicProcedure } from "n/server/api/trpc";
import {request} from 'n/utils/fetch'
import { z } from "zod";

export type Student = {
    id: number,
    ra: string,
    name: string,
    address: string,
    city: string,
    uf: string,
    phone: number,
    course_id: number,
    created_at?: string,
    updated_at?: string
}

export const studentRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const res = await request<Student[]>('http://127.0.0.1:8000/api/students')
      return res;
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({input}) => {
      const res = await request<Student>(`http://127.0.0.1:8000/api/students/${input}`)
      return res;
    }),
});





