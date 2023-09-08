import { createTRPCRouter, publicProcedure } from "n/server/api/trpc";
import {request} from 'n/utils/fetch'
import { z } from "zod";

export type Reservation = {
  id: number,
  student_id: number,
  book_id: number,
  start_date: string,
  end_date: string,
  created_at: null,
  updated_at: null,
  student_name: string,
  book_title: string
}

export const reservationRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const res = await request<Reservation[]>('http://127.0.0.1:8000/api/reservations')
      return res;
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({input}) => {
      const res = await request<Reservation>(`http://127.0.0.1:8000/api/reservations/${input}`)
      return res;
    }),
});





