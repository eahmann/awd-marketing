import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"

import Icon from "@/components/shared/Icon"
import LabelTitleText from "@/components/shared/LabelTitleText"
import { IHeading } from "@/types/IHeading"

interface Props {
  heading: IHeading
}
const features2 = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
]
const FeatureGroup = ({ label, title, text, features }) => {
  const heading = { label, title, text }
  return (
    <section>
      <div className="mx-auto max-w-8xl px-6">
        {heading && <LabelTitleText {...heading} />}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative ">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                    <Icon
                      icon={feature.icon}
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium text-gray-100 leading-6">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-200">
                  {feature.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FeatureGroup
