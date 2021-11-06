import { NextSeo } from "next-seo"

import { IImage } from "@/types/IImage"

type Props = {
  metaTitle: string
  metaDescription: string
  twitterCardType: string
  twitterUsername: string
  shareImage: IImage
  titleSuffix: string
}

const Seo: React.FC<Props> = ({
  metaTitle,
  metaDescription,
  twitterCardType,
  twitterUsername,
  shareImage,
  titleSuffix,
}) => {
  // Prevent errors if no metadata was set
  if (!metaTitle && !metaDescription) return null

  const metaImageUrl =
    "https://og.atomicweb.dev/api/general/?templateTitle=" +
    metaTitle +
    "&siteName=" +
    titleSuffix +
    "&description=" +
    metaDescription +
    "&theme=dark&logoWidth=500"

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: `${metaTitle} | ${titleSuffix}`,
        description: metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        images: [
          {
            url: metaImageUrl,
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
        ],
      }}
      // Only included Twitter data if we have it
      twitter={{
        cardType: "summary_large_image",
        // Handle is the twitter username of the content creator
        ...(twitterUsername && { handle: twitterUsername }),
      }}
    />
  )
}

export default Seo
