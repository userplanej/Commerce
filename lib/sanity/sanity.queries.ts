import { groq } from 'next-sanity';
import { PAGE } from './fragments/sanity/pages/page';

export const SANITY_PAGE_QUERY = groq`
  *[
    _type == 'page'
    && slug.current == $slug
  ] | order(_updatedAt desc) [0]{
    ${PAGE}
  }
`;
