import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "n/server/api/trpc";
import { request } from "n/utils/fetch";

type Counts = {
  books: number,
  authors: number,
  courses: number,
  students: number,
  reservations: number,
  publishers: number,
}

export const authRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure
  .query(() => {
    return "you can now see this secret message!";
  }),

  getCounts: publicProcedure
  .query(async () => {
    const res = await request<Counts>(`http://127.0.0.1:8000/api/home/`)
    return res;
  }),
});
