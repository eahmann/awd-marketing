import classNames from "classnames"
import { FiArrowRight } from "react-icons/fi"

import CustomLink from "@/components/shared/CustomLink"
import Heading from "@/components/shared/Heading"
import NextImage from "@/components/shared/NextImage"
import { IHeading } from "@/types/IHeading"

interface Props {
  heading: IHeading
}

const FeatureGroup = ({ heading, features }) => {
  return (
    <section>
      <div className="mx-6">
        {heading && <Heading {...heading} />}
        <div className="flex flex-col py-10 sm:mx-auto gap-20 max-w-8xl">
          {features &&
            features.map((feature, index) => (
              <div
                className={classNames(
                  // Common classes
                  "flex flex-col justify-start md:justify-between bg-gradient-to-b rounded-xl shadow-lg to-brand-700 from-brand-500",
                  index % 2 === 0
                    ? "lg:flex-row lg:bg-gradient-to-l "
                    : "lg:flex-row-reverse lg:bg-gradient-to-r"
                )}
                key={feature.id}
              >
                {/* Text section */}
                <div className="flex flex-col w-full p-6 px-4 text-lg lg:w-6/12 lg:pr-6">
                  <div className="flex-grow">
                    <h2 className="text-3xl font-extrabold tracking-tight text-brand-50">
                      {feature.title}
                    </h2>
                    <p className="my-6 text-brand-100">{feature.text}</p>
                  </div>
                  <div className="w-max">
                    <CustomLink link={feature.link} className="">
                      <span className="text-brand-100 with-arrow hover:underline">
                        {feature.link.label}
                        <FiArrowRight className="inline" />
                      </span>
                    </CustomLink>
                  </div>
                </div>
                {/* Media section */}
                <div className="w-full overflow-hidden lg:w-6/12 h-96">
                  {/* Images */}
                  {feature.image.mime.startsWith("image") && (
                    // <img
                    //   className="object-cover w-full h-full"
                    //   src={getStrapiMedia(feature.image.url)}
                    //   alt="People working on laptops"
                    // />
                    <NextImage media={feature.image} layout="intrinsic" />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGroup
