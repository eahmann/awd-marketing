import CallToAction from "./CallToAction"
import LogoCloud from "./LogoCloud"
import Pricing from "./Pricing"
import ServiceCardGroup from "./ServiceCardGroup"
import CarouselBlock from "@/components/blocks/Carousel/Carousel"
import CenteredTitleAndText from "@/components/blocks/CenteredTitleAndText"
import ContactUsForm from "@/components/blocks/ContactUsForm"
import FAQ from "@/components/blocks/FAQ"
import FeatureGroup from "@/components/blocks/FeatureGroup"
import GlobalContactInfo from "@/components/blocks/GlobalContactInfo"
import Hero from "@/components/blocks/Hero"
import ImageGallery from "@/components/blocks/ImageGallery"

const blockComponents = {
  "blocks.hero-v2": Hero,
  "blocks.carousel": CarouselBlock,
  "blocks.call-to-action": CallToAction,
  "blocks.contact-us-form": ContactUsForm,
  "blocks.service-card-group": ServiceCardGroup,
  "blocks.faq": FAQ,
  "blocks.image-gallery": ImageGallery,
  "blocks.title-and-text": CenteredTitleAndText,
  "blocks.feature-group": FeatureGroup,
  "blocks.global-contact-info": GlobalContactInfo,
  "blocks.pricing": Pricing,
  "blocks.logo-cloud": LogoCloud,
}

const getBlockComponent = ({ __component, ...rest }, index) => {
  const Block = blockComponents[__component]

  return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks }) => {
  return <>{blocks.map(getBlockComponent)}</>
}

export default BlockManager
