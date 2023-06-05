import { createClient } from 'next-sanity';
import { cache } from 'react';

export const dataset = `${process.env.SANITY_DATASET!}`;
export const projectId = `${process.env.SANITY_PROJECT_ID!}`;

const apiVersion = process.env.SANITY_API_VERSION; // "2023-05-03"

// eslint-disable-next-line no-unused-vars
const client = createClient({
  projectId: 'hhf1c6ej',
  dataset: 'production',
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
