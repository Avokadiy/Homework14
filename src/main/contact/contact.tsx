import style from './style.module.css'

export default function Contact() {
    return(
        <div className={style.container}>
            
            <div className={style.inputs}>
                <h2>CONTACT ME</h2>
                <p>Have a question or want to work together? </p>
                <input className={style.shortinput} placeholder='Name' type="text" name='name'/>
                <input className={style.shortinput} placeholder='Enter email' type="text" name='email'/>
                <textarea className={style.longinput} placeholder='Your Message' name='message'/>
                <button>Send message</button>
            </div>

            <div className={style.quotes}>
                <div>
                    <h2>William Lawson</h2>
                    <p>Working with Akkaki was a great time spending expirience</p>
                </div>
                <div>
                    <h2>Johnnie Walker</h2>
                    <p>Haven't seen a person working so tough without brakes</p>
                </div>
                <div>
                    <h2>White Horse co.</h2>
                    <p>He'll do everything to make your dreams come true</p>
                </div>
                <div>
                    <h2>John Jameson</h2>
                    <p>Pure work, no time waste</p>
                </div>
            </div>
        </div>
    )
}