import Plan from "./Plan"
import LabelTitleText from "@/components/shared/LabelTitleText"

const Pricing = ({ label, title, text, plans }) => {
  const labelTitleText = { label, title, text }

  return (
    <section>
      <div className="px-4 pt-8 mx-auto mb-20 max-w-7xl sm:px-6 lg:px-8">
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
