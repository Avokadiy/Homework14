import style from './style.module.css'
import projects from '../../data/data.json'
import Card from './card/card'

export default function Projects() {
    return(
        <>
            <h2>My Projects</h2>
            <div className={style.container}>
                {projects.projects.map((project) => {
                    return <Card key={project.id} data={project}/>
                })}
            </div>
        </>
    )
}