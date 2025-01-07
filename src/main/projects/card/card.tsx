import { FC } from "react"
import style from './style.module.css'
import { Project } from '../../../types/project'

type Props = {
    data: Project;
}

const Card: FC<Props> = ({data}) => {
    return (
        <div className={style.container}>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default Card;