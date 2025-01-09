import style from './style.module.css'
import developer from '../../assets/images/developer.png'

export default function Bio() {
    return (
        <div className={style.container}>
            <div>
                <h3>About me</h3>
                <p>Real Name: Nikita</p>
                <p>25 years old</p>
                <p>Education: English teacher</p>
                <p>I'm ready to work 24/7, 7 days a week and to do everything to not work with kids</p>
                <p>Hobbies: games, modelling, boardgames and etc.</p>
            </div>
            <div className={style.wrap}>
                <img src={developer} alt="developer image" />
            </div>
        </div>
    )
}