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
  
  getBuildsByMatchUp: publicProcedure
    .input(z.object({ matchUp: z.string() }))
    .query(async ({ ctx, input }) => {
      const builds = await ctx.prisma.buildOrder.findMany({
        where: {
        matchUp: input.matchUp,
      }
    });
    return builds;
  }),

  
});
