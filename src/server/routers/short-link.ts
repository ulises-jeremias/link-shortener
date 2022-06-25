import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { createRouter } from '~/server/createRouter';
import { prisma } from '~/server/prisma';

/**
 * Default selector for ShortLink.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultShortLinkSelect = Prisma.validator<Prisma.ShortLinkSelect>()({
  id: true,
  url: true,
  slug: true,
  createdAt: true,
});

export const shortLinkRouter = createRouter()
  // create
  .mutation('createSlug', {
    input: z.object({
      slug: z.string(),
      url: z.string(),
    }),
    async resolve({ input }) {
      const shortLink = await prisma.shortLink.create({
        data: input,
        select: defaultShortLinkSelect,
      });
      return shortLink;
    },
  })
  // read
  .query('slugCheck', {
    input: z.object({
      slug: z.string(),
    }),
    async resolve({ input }) {
      return prisma.shortLink.findFirst({
        where: input,
        select: defaultShortLinkSelect,
      });
    },
  });
