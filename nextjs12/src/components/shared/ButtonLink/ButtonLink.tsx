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
          "px-6 py-3 text-base font-medium rounded-md w-full",
          {
            "shadow-lg": shadow,
          },
          {
            "shadow-none": !shadow,
          },
          {
            "bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-primary-50 hover:text-opacity-100 hover:from-primary-400":
              appearance === "primary",
          },
          {
            "border-2 border-primary-300 bg-primary-700 text-primary-800 hover:bg-primary-25":
              appearance === "primary_outline",
          },
          {
            "bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 text-secondary-100 hover:text-opacity-100 hover:from-secondary-400":
              appearance === "secondary",
          },
          {
            "border-secondary-500 bg-gray-50 text-secondary-800 hover:bg-secondary-25":
              appearance === "secondary-outline",
          },
          {
            "bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-brand-100 hover:text-opacity-100 hover:from-brand-400":
              appearance === "brand",
          },
          {
            "border-2 border-brand-500 bg-gray-50 text-brand-800 text-opacity-90 hover:text-opacity-100 hover:bg-brand-25":
              appearance === "brand_outline",
          },
          {
            "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700  text-gray-50 hover:from-gray-400":
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
