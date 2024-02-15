import { Metadata } from "next"

export function constructMetadata({
    title = 'Marketing Agency - React and Next JS Template',
    description = 'The official Next.js Course Dashboard, built with App Router.',
    image = '/thumbnail.png',
    icons = '/favicon.ico',
    noIndex = false,
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      // openGraph: {
      //   title,
      //   description,
      //   images: [
      //     {
      //       url: image,
      //     },
      //   ],
      // },
      // twitter: {
      //   card: 'summary_large_image',
      //   title,
      //   description,
      //   images: [image],
      //   creator: '@skupta',
      // },
      icons,
    //   metadataBase: new URL('https://'),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    }
  }