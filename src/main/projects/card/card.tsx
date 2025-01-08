import { FC } from "react"
import style from './style.module.css'
import { Project } from '../../../types/project'

type Props = {
    data: Project;
}

const Card: FC<Props> = ({data}) => {
    return (
        <div className={style.container}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default Card;