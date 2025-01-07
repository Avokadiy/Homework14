import style from './style.module.css'
import projects from '../../data/data.json'
import Card from './card/card'

export default function Projects() {
    return(
        <div className={style.container}>
            {projects.projects.map((project) => {
                return <Card data={project}/>
            })}
        </div>
    )
}