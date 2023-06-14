import groq from 'groq';

export const PRODUCT_OPTION = groq`
  ...,
  "name": name,
  "values": values[]
`;
