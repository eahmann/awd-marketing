import { ETheme } from "@/enums/ETheme"

import { IButtonLink } from "./IButtonLink"

export interface ICtaBlock {
  title: string
  text: string
  buttons: Array<IButtonLink>
  theme: ETheme
}
