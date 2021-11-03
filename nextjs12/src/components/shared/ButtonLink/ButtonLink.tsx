import classNames from "classnames"

import { IButtonLink } from "@/types/IButtonLink"

import CustomLink from "../CustomLink"

interface Props {
  button: IButtonLink
  className?: string
}

const ButtonLink: React.FC<Props> = ({ button, className }) => {
  const { label, theme } = button

  const shadow = theme.endsWith("shadow")

  const getButtonAppearance = (theme, shadow): string => {
    if (shadow) {
      return theme.split("_shadow")[0]
    } else {
      return theme
    }
  }

  const appearance = getButtonAppearance(theme, shadow)

  return (
    <CustomLink link={button} className={classNames(" text-center", className)}>
      <div
        className={classNames(
          "border-2 px-6 py-3 text-base font-medium rounded-md w-full ",
          {
            "shadow-xl": shadow,
          },
          {
            "shadow-none": !shadow,
          },
          {
            "border-transparent bg-primary-700 text-white text-opacity-90 hover:text-opacity-100 hover:bg-primary-600":
              appearance === "primary",
          },
          {
            "border-primary-300 bg-gray-50 text-primary-800 hover:bg-primary-25":
              appearance === "primary_outline",
          },
          {
            "border-transparent bg-secondary-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-secondary-400":
              appearance === "secondary",
          },
          {
            "border-secondary-500 bg-gray-50 text-secondary-800 hover:bg-secondary-25":
              appearance === "secondary-outline",
          },
          {
            "border-transparent bg-brand-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-brand-400 hover:ring-brand-400":
              appearance === "brand",
          },
          {
            "border-2 border-brand-500 bg-gray-50 text-brand-800 text-opacity-90 hover:text-opacity-100 hover:bg-brand-25":
              appearance === "brand_outline",
          },
          {
            "border-transparent bg-gray-50 text-gray-800 hover:bg-gray-200":
              appearance === "muted",
          },
          {
            "border-2 border-gray-500 bg-gray-50 text-gray-800 hover:bg-gray-200":
              appearance === "muted-outline",
          }
        )}
      >
        {label}
      </div>
    </CustomLink>
  )
}

export default ButtonLink
