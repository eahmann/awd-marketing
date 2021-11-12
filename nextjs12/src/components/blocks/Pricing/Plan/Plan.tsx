import { CheckIcon } from "@heroicons/react/outline"

import ButtonLink from "@/components/shared/ButtonLink"

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Plan = ({
  name,
  description,
  planFeature,
  price,
  pricePeriod,
  basePrice,
  button,
}) => {
  return (
    <div className="">
      {pricing.tiers.map((tier) => (
        <div
          key={tier.title}
          className="relative flex flex-col h-full p-8 border border-gray-200 bg-white/90 rounded-2xl shadow-sm"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            {tier.mostPopular ? (
              <p className="absolute top-0 px-4 text-xs font-semibold tracking-wide text-white uppercase bg-indigo-500 rounded-full py-1.5 transform -translate-y-1/2">
                Most popular
              </p>
            ) : null}
            <p className="flex items-baseline mt-4 text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">
                ${price && <span>{price}</span>}
              </span>
              <span className="ml-1 text-xl font-semibold">{pricePeriod}</span>
            </p>
            <p className="text-sm text-gray-400">{basePrice}</p>
            <p className="mt-6 text-gray-500">{description}</p>

            {/* Feature list */}
            <ul role="list" className="mt-6 space-y-6">
              {planFeature.map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <ButtonLink className="mt-6" button={button} />
        </div>
      ))}
    </div>
  )
}

export default Plan
