import classNames from "classnames"

import ButtonLink from "@/components/shared/ButtonLink"
import { ETheme } from "@/enums/ETheme"
import { ICtaBlock } from "@/types/ICtaBlock"

const getBackgroundColor = (theme: ETheme): string => {
  if (theme === ETheme.muted) {
    return "bg-gradient-to-br from-gray-400 via-gray-200  to-gray-100"
  } else {
    return `bg-gradient-to-br from-${theme}-700 via-${theme}-500  to-${theme}-700`
  }
}

const getTitleColor = (theme: ETheme): string => {
  if (theme === ETheme.muted) {
    return "text-gray-900"
  } else {
    return "text-white"
  }
}

const getTextColor = (theme: ETheme): string => {
  if (theme === ETheme.muted) {
    return "text-gray-700"
  } else {
    return `text-${theme}-50`
  }
}

const WideGradient: React.FC<ICtaBlock> = ({
  title,
  text,
  buttons,
  theme,
}): JSX.Element => {
  return (
    <section>
      <div className="mx-auto max-w-7xl mb-20">
        <div
          className={classNames(
            getBackgroundColor(theme),
            "shadow-2xl mx-6 rounded-xl px-4 py-16 text-center sm:px-6 lg:px-8"
          )}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className={getTitleColor(theme) + " block"}>{title}</span>
            {text && (
              <span
                className={classNames(
                  getTextColor(theme),
                  "mt-4 text-2xl text-${theme}-50 leading-6"
                )}
              >
                {text}
              </span>
            )}
          </h2>

          {buttons && (
            <div className="flex flex-col justify-center mt-4 lg:flex-row">
              {buttons.map((button) => (
                <ButtonLink
                  key={button.id}
                  button={button}
                  className="mt-4 lg:mr-4 lg:last:mr-0 lg:mt-0"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WideGradient
