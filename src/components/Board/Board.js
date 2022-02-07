import styles from './Board.module.css'
import { StatusColumn } from '..'
import { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const BoardContext = createContext({
    handleAddTask: () => { },
    handleUpdateTaskStatus: () => { },
})

const Board = () => {
    const [tasks, setTasks] = useState([])

    const handleAddTask = (title, status) => {
        const newTask = {
            id: uuid(),
            title,
            status,
        }
        setTasks(tasks.concat(newTask))
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                task.status = newStatus
            }
            return task
        }))
    }

    return (
        <BoardContext.Provider value={{ handleAddTask, handleUpdateTaskStatus }}>
            <div className={styles.root}>
                <StatusColumn title='To Do' tasks={tasks.filter(t => t.status === 'To Do')} />
                <StatusColumn title='In Progress' tasks={tasks.filter(t => t.status === 'In Progress')} />
                <StatusColumn title='QA' tasks={tasks.filter(t => t.status === 'QA')} />
                <StatusColumn title='Done' tasks={tasks.filter(t => t.status === 'Done')} />
            </div>
        </BoardContext.Provider>
    )
}

export default Board
