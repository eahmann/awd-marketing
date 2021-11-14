import Icon from "@/components/shared/Icon"
import LabelTitleText from "@/components/shared/LabelTitleText"

interface Props {
  label: string
}

const FeatureGroup = ({ label, title, text, features }) => {
  const heading = { label, title, text }
  return (
    <section>
      <div className="px-6 mx-auto mb-20 max-w-8xl">
        {heading && <LabelTitleText {...heading} />}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative ">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-br from-brand-500 to-brand-800">
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
