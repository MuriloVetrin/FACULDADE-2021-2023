import { exampleRouter } from "n/server/api/routers/example";
import { createTRPCRouter } from "n/server/api/trpc";
import { authorRouter } from "./routers/author";
import { publisherRouter } from "./routers/publisher";
import { courseRouter } from "./routers/course";
import { bookRouter } from "./routers/book";
import { studentRouter } from "./routers/student";
import { reservationRouter } from "./routers/reservation";
import { authRouter } from "./routers/auth";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  author: authorRouter,
  course: courseRouter,
  book: bookRouter,
  publisher: publisherRouter,
  reservation: reservationRouter,
  student: studentRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
