import style from './style.module.css'
import git from '../assets/icons/git.jpg'
import instagram from '../assets/icons/instagram.png'
import vk from '../assets/icons/vk.png'

export default function Footer() {
    return(
        <div className={style.container}>
            <div>
                <a href="https://github.com/Avokadiy"><img src={git} alt="git icon" /></a>
                <a href="https://www.instagram.com/struya_kontenta/"><img src={instagram} alt="instagram icon" /></a>
                <a href="https://vk.com/braaedy6215"><img src={vk} alt="vk icon" /></a>
            </div>
            <p>Nikita Demidov, 2025</p>
        </div>
    )
}