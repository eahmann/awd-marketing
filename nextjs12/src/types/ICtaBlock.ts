import { IButtonLink } from "./IButtonLink"
import { ICtaBlockSettings } from "./settings/ICtaBlockSettings";

export interface ICtaBlock {
  title: string
  text: string
  buttons: Array<IButtonLink>
  settings: ICtaBlockSettings
}
