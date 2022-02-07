import { useContext } from 'react'
import { BoardContext } from '../Board/Board'
import styles from './Task.module.css'

const options = [
    {
        value: 'To Do',
        label: 'To Do',
    },
    {
        value: 'In Progress',
        label: 'In Progress',
    },
    {
        value: 'QA',
        label: 'QA',
    },
    {
        value: 'Done',
        label: 'Done',
    },
]

const Task = ({ task }) => {
    const { handleUpdateTaskStatus } = useContext(BoardContext)

    return (
        <div className={styles.root}>
            <div className={styles.actions}>
                <select value={task.status} onChange={e => handleUpdateTaskStatus(task.id, e.target.value)}>
                    {options.map(option => (
                        option.value === task.status ? (
                            <option key={option.value} value={option.value}>Move</option>
                        ) : (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )
                    ))}
                </select>
            </div>
            <div className={styles.title}>{task.title}</div>
        </div>
    )
}

export default Task
