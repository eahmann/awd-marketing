import { AiOutlineRocket } from "react-icons/ai"
import { FaBeer, FaNodeJs, FaRegFileCode } from "react-icons/fa"

const icons = {
  FaBeer: FaBeer,
  AiOutlineRocket: AiOutlineRocket,
  FaNodeJs: FaNodeJs,
  FaRegFileCode: FaRegFileCode,
}

const Icon = ({ icon, className }) => {
  const Icon = icons[icon]

  return Icon ? <Icon className={className} /> : null
}

export default Icon
