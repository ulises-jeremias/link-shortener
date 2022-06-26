/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const firstShortLinkId = '5c03994c-fc16-47e0-bd02-d218a370a078';
  await prisma.shortLink.upsert({
    where: {
      id: firstShortLinkId,
    },
    create: {
      id: firstShortLinkId,
      slug: 'slug1',
      url: 'https://github.com',
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
