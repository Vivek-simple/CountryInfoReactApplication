import { useContext } from "react"
import { ThemeContext } from "../component/ThemeContext"

export const useTheme=()=>[isDark,setIsDark]=useContext(ThemeContext)
