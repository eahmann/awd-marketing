import classNames from "classnames"

import ButtonLink from "@/components/shared/ButtonLink"
import { ETheme } from "@/enums/ETheme"
import { ICtaBlock } from "@/types/ICtaBlock"

const getBackgroundColor = (theme: ETheme): string => {
  if (theme === ETheme.muted) {
    return "bg-gray-100"
  } else if (theme == "white") {
    return "bg-white"
  } else {
    return `bg-${theme}-600`
  }
}

const getTitleColor = (theme: ETheme): string => {
  if (theme === ETheme.muted || theme === ETheme.white) {
    return "text-gray-800"
  } else {
    return "text-white"
  }
}

const getTextColor = (theme: ETheme): string => {
  if (theme === ETheme.muted || theme === ETheme.white) {
    return "text-gray-700"
  } else {
    return `text-${theme}-50`
  }
}

const SimpleJustified: React.FC<ICtaBlock> = ({
  title,
  text,
  buttons,
  theme,
}): JSX.Element => {
  return (
    <section>
      <div className="mx-6">
        <div
          className={classNames(
            getBackgroundColor(theme),
            "mb-20 shadow-md rounded-md max-w-8xl mx-auto"
          )}
        >
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span
                className={classNames(
                  "block break-words",
                  getTitleColor(theme)
                )}
              >
                {title}
              </span>
              {text && (
                <span
                  className={classNames("block text-2xl", getTextColor(theme))}
                >
                  {text}
                </span>
              )}
            </h2>
            <div className="flex flex-wrap mt-8 lg:mt-0 lg:flex-shrink-0">
              {buttons.map((button) => (
                <ButtonLink
                  key={button.id}
                  button={button}
                  className="mt-4 mr-4 last:mr-0 lg:mt-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleJustified
