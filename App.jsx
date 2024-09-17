import { Outlet } from "react-router-dom"
import Header from './component/Header'
import {ThemeProvider } from "./component/ThemeContext"
export default function App() {
  return (
   <ThemeProvider >
      <Header/>
      <Outlet/>
   </ThemeProvider>
  )
}
