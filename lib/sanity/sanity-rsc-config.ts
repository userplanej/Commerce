import { createClient } from 'next-sanity';
import { cache } from 'react';

export const apiVersion = process.env.SANITY_API_VERSION || '2023-01-01';

export const dataset = assertValue(
  process.env.SANITY_DATASET,
  'Missing environment variable: SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

// eslint-disable-next-line no-unused-vars
const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2022-03-25',
  useCdn: false
});

export const clientFetch = cache(client.fetch.bind(client));
// Wrap the cache function in a way that reuses the TypeScript definitions
//const clientFetch = cache(client.fetch.bind(client))

// Now use it just like before, fully deduped, cached and optimized by react
//const data = await clientFetch(groq`*[]`)
// You can use the same generics as before
//const total = await clientFetch<number>(groq`count*()`)
