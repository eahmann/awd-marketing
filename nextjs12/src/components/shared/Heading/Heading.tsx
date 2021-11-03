import classNames from "classnames"

import { EAlignment } from "@/enums/EAlignment"
import { IHeading } from "@/types/IHeading"

const getAlignment = (alignment) => {
  if (alignment === EAlignment.center) {
    return "text-center"
  } else if (alignment === EAlignment.right) {
    return "text-right"
  } else if (alignment === EAlignment.left) {
    return "text-left"
  }
}

const Heading: React.FC<IHeading> = ({ title, text, label, alignment }) => {
  return (
    <div className={classNames("mx-auto px-8", getAlignment(alignment))}>
      {label && (
        <>
          <span className="text-base font-semibold tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-b from-brand-400 to-brand-500">
            {label}
          </span>
        </>
      )}
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-100 leading-8 sm:text-4xl">
        {title}
      </p>
      {text && <p className="mt-4 text-lg text-gray-300 leading-6">{text}</p>}
    </div>
  )
}

export default Heading
