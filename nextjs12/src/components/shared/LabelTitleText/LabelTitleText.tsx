import { ILabelTitleText } from "@/types/ILabelTitleText"

const LabelTitleText: React.FC<ILabelTitleText> = ({
  label,
  title,
  text,
}): JSX.Element => {
  return (
    <div className="max-w-sm px-8 mx-auto text-center sm:max-w-7xl">
      {label && (
        <h2 className="text-base font-semibold tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-b from-brand-400 to-brand-500">
          {label}
        </h2>
      )}
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-100 leading-8 sm:text-4xl">
        {title}
      </p>
      {text && <p className="mt-4 text-lg text-gray-200 leading-6">{text}</p>}
    </div>
  )
}

export default LabelTitleText
