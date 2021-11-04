import LabelTitleText from "@/components/shared/LabelTitleText"
import Plan from "./Plan"
import { CheckIcon } from "@heroicons/react/outline"

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
    {
      title: "Startup",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const Pricing = ({ label, title, text, plans }) => {
  const labelTitleText = { label, title, text }

  return (
    <section>
      <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <LabelTitleText {...labelTitleText} />

        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <Plan key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
