import { IButtonLink } from "./IButtonLink"
import { ETheme } from "@/enums/ETheme"

export interface ICtaBlock {
  title: string
  text: string
  buttons: Array<IButtonLink>
  theme: ETheme
}
