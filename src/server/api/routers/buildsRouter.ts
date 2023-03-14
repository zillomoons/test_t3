import { contextProps } from "@trpc/react-query/shared";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async({ input, ctx }) => {
      //TODO: save to the database

      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        }
      })
      return build;
    }),
  
  getBuilds: publicProcedure.query(async ({ctx}) => {
    const builds = await ctx.prisma.buildOrder.findMany();
    return builds;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
