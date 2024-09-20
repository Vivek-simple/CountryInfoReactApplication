
import { useTheme } from '../hooks/useTheme'

export default function Header() {

  const [isDark,setIsDark]=useTheme()
  return (
    <header className={`header-container ${isDark?'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDark',!isDark)
        }}><i className={`fa-regular ${isDark?'fa-sun':'fa-moon'}`}></i>&nbsp;&nbsp;{isDark?"Light Mode":"Dark Mode"}</p>
      </div>
    </header>
  )
}
