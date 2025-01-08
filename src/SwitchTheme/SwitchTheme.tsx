import { useContext } from "react"
import { ThemeContext } from "../App";
import style from './style.module.css'


export default function SwitchTheme() {
    const currentTheme = useContext(ThemeContext);

    const handleClick = () => {
        if (currentTheme?.theme === 'dark'){
            currentTheme.setTheme('light');
        } else {
            currentTheme?.setTheme('dark');
        }
    }

    return(
        <a className={style.button} onClick={handleClick}>{currentTheme?.theme}</a>
    )
}