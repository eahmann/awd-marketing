import { useTheme } from "next-themes"
import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="text-gray-200 dark:text-[#FFFF00]">
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
    </button>
  )
}

export default ThemeToggle
