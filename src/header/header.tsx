import SwitchTheme from '../SwitchTheme/SwitchTheme'
import style from './style.module.css'

export default function Header() {
    return(
        <div className={style.container}>
            <div className={style.logo}>
                AKKAKI
            </div>
            <div className={style.links}>
                <a href="#">Home</a>
                <a href="">About me</a>
                <a href="">Portfolio</a>
                <a href="">Services</a>
            </div>
            <button className={style.button}>
                Contact me
            </button>
            <SwitchTheme/>
        </div>
    )
}