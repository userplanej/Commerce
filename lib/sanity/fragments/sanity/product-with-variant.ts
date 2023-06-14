import groq from 'groq';

export const PRODUCT_WITH_VARIANT = groq`
  product->{
    _id,
    "available": !store.isDeleted && store.status == 'active',
    "gid": store.gid,
    "slug": store.slug.current,
    "handle": store.slug.current,
    "title": store.title,
    "variantGid": coalesce(^.variant->store.gid, store.variants[0]->store.gid),
    "price": coalesce(store.priceRange.minVariantPrice, store.priceRange.maxVariantPrice),
    "image": store.previewImageUrl,
    "compareAtPrice": store.compareAtPrice,
    "availableForSale": store.availableForSale,
    "vendor" : store.vendor,
    "options" : store.options[]
  },
`;
