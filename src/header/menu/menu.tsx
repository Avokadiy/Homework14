import style from './style.module.css'

export default function Menu() {
    return (
        <div className={style.menu}>
            <a href="#">Home</a>
            <a href="">About me</a>
            <a href="">Portfolio</a>
            <a href="">Services</a>
        </div>
    )
}