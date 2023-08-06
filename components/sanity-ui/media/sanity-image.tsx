import imageUrlBuilder from '@sanity/image-url';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';

const BREAKPOINTS = [640, 768, 1024, 1280, 1536]; // px

// @ts-expect-error
export const findLastNonNullValue = (items, currentIndex) => {
  const sliced = items.slice(0, currentIndex);
  // @ts-expect-error
  return sliced.filter((val) => val !== null).pop();
};

// @ts-expect-error
const generateSrcSet = (urlBuilder, breakpoints, { quality }) => {
  return (
    breakpoints
      // @ts-expect-error
      .map((width) => {
        return `${urlBuilder.width(width).auto('format').quality(quality)} ${width}w`;
      })
      .join(', ')
  );
};

// Generate srcset sizes based off breakpoints
// @ts-expect-error
const generateSizes = (breakpoints, sizes) => {
  if (!sizes) {
    return undefined;
  }

  if (typeof sizes === 'string') {
    return sizes;
  }

  if (sizes.length === 1 && sizes[0] !== null) {
    return sizes[0];
  }

  return (
    sizes
      // @ts-expect-error
      .map((val, i) => {
        if (i === sizes.length - 1) {
          return sizes[i];
        }

        let current = val;
        if (val === null) {
          current = findLastNonNullValue(sizes, i);
        }

        return `(max-width: ${breakpoints?.[i]}px) ${current}`;
      })
      .join(', ')
  );
};

/**
 * A simple image component that wraps around `@sanity/image-url`
 */
// @ts-expect-error
export default function SanityImage(props) {
  const {
    alt,
    blurDataURL,
    crop,
    dataset,
    height,
    hotspot,
    layout,
    objectFit,
    options,
    projectId,
    quality = 80,
    sizes,
    src,
    width,
    ...rest
  } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    // rootMargin: '0px 0px',
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  if (!dataset) {
    throw new Error('SanityImage is missing required "dataset" property.');
  }
  if (!projectId) {
    throw new Error('SanityImage is missing required "projectId" property.');
  }
  if (!src) {
    throw new Error('SanityImage is missing required "src" property.');
  }

  // Strip out blacklisted props
  delete rest?.['decoding'];
  delete rest?.['ref'];
  delete rest?.['srcSet'];
  delete rest?.['style'];

  const urlBuilder = imageUrlBuilder({ projectId, dataset }).image({
    _ref: src,
    crop,
    hotspot
  });

  // Generate srcset + sizes
  const srcSetSizes = generateSizes(BREAKPOINTS, sizes);
  const srcSet = generateSrcSet(urlBuilder, BREAKPOINTS, { quality });

  // Determine image aspect ratio (factoring in any potential crop)
  let aspectRatio;
  if (height && width) {
    const multiplierWidth = 1 - (crop?.left || 0) - (crop?.right || 0);
    const multiplierHeight = 1 - (crop?.bottom || 0) - (crop?.top || 0);
    aspectRatio = (width * multiplierWidth) / (height * multiplierHeight);
  }

  let urlDefault = urlBuilder;

  // Apply props
  /*
  if (height) {
    url = url.height(options.height);
  }
  if (width) {
    url = url.width(options.width);
  }
  */

  // TODO: check for valid range
  // if (options?.blur) {
  //   urlDefault = urlDefault.blur(options.blur);
  // }
  // @ts-expect-error
  urlDefault = urlDefault.url();

  return (
    <div ref={ref}>
      {inView ? (
        <Image
          {...rest}
          alt={alt}
          className="animate-fadeIn"
          //src={blurDataURL}
          sizes={srcSetSizes}
          src={urlDefault}
          srcSet={srcSet}
          width={1024}
          height={1024}
          style={{
            ...(layout === 'fill' && {
              bottom: 0,
              height: '100%',
              left: 0,
              objectFit,
              position: 'absolute',
              right: 0,
              top: 0,
              width: '100%'
            }),
            ...(layout === 'responsive' && {
              aspectRatio,
              width: '100%'
            })
          }}
          loading="lazy"
        />
      ) : null}
    </div>
  );
}
