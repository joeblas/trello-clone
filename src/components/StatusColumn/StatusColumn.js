import { useRef, useState } from 'react'
import { Task } from '..'
import AddNew from './AddNew'
import styles from './StatusColumn.module.css'

const StatusColumn = ({
    title,
    tasks = [],
}) => {

    const inputRef = useRef()
    const [isAddingTask, setIsAddingTask] = useState(false)

    const handleStartAddingTask = () => {
        setIsAddingTask(true)
        // there may be a better way to focus the input
        setTimeout(() => inputRef.current.focus(), 0)
    }

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.tasks}>
                {tasks.map(task => (
                    <Task id={task.id} task={task} />
                ))}
            </div>
            
                {isAddingTask ? (
                    <div className={styles.addNew}>
                        <AddNew onCancel={() => setIsAddingTask(false)} inputRef={inputRef} status={title} />
                    </div>
                ) : (
                    <button className={styles.addTask} onClick={handleStartAddingTask}>
                        + Add another card
                    </button>
                )}
        </div>

    )
}

export default StatusColumn
