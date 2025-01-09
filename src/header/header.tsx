import { useState } from 'react';
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import style from './style.module.css'
import Menu from './menu/menu';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div className={style.container}>
            <div className={style.logo}>AKKAKI</div>
            <div className={style.links}>
                <a href="#">Home</a>
                <a href="">About me</a>
                <a href="">Portfolio</a>
                <a href="">Services</a>
            </div>
            <button onClick={() => {setIsVisible(!isVisible)}} className={style.linksListButton}>O O O</button>
            {isVisible && <Menu/>}
            
            <button className={style.button}>Contact me</button>
            <SwitchTheme/>
        </div>
    )
}