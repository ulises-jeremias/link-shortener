import { createContextInner } from '../context';
import { appRouter } from './_app';
import { inferMutationInput } from '~/utils/trpc';

test('add and get a short link', async () => {
  const ctx = await createContextInner({});
  const caller = appRouter.createCaller(ctx);

  const input: inferMutationInput<'short-link.createSlug'> = {
    slug: 'test1',
    url: 'URL',
  };
  const shortLink = await caller.mutation('short-link.createSlug', input);
  const slugCheckResult = await caller.query('short-link.slugCheck', {
    slug: shortLink.slug,
  });

  expect(slugCheckResult).toMatchObject({ used: true });
});
