import { createClient } from 'next-sanity';

import SanityClient from 'next-sanity-client';

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

export const sanityClient = new SanityClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false
});

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2022-03-25',
  useCdn: false
});

export const clientFetch = cache(client.fetch.bind(client));
