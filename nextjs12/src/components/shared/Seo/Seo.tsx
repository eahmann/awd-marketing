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
    "https://og-image-sgtu87b2h-eahmann.vercel.app/" +
    metaTitle +
    "**.png?theme=light&md=1&fontSize=100px&images=https://res.cloudinary.com/dkznztisc/image/upload/v1635871244/AWD_branding_lighter_04_e6ccfde704.svg&widths=600&heights=600"

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
