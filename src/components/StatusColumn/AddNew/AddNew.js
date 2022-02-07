import { useContext, useState } from 'react'
import { BoardContext } from '../../Board/Board'
import styles from './AddNew.module.css'

const AddNew = ({
    onCancel,
    inputRef,
    status,
}) => {

    const { handleAddTask } = useContext(BoardContext)
    const [newTaskInput, setNewTaskInput] = useState('')
    const [validationError, setValidationError] = useState('')
    
    const handleSaveTask = (e) => {
        e.preventDefault()

        if (newTaskInput.trim() === '') {
            setValidationError('Task title cannot be empty')
            return
        }

        handleAddTask(newTaskInput, status)
        setValidationError('')
        setNewTaskInput('')
    }
    
    const handleCancel = () => {
        setNewTaskInput('')
        onCancel()
    }
    
    return (
        <div className={styles.root}>
            <form onSubmit={handleSaveTask}>
                <textarea
                    ref={inputRef}
                    onChange={e => setNewTaskInput(e.target.value)}
                    value={newTaskInput}
                    className={styles.input}
                    type="text"
                    placeholder="Add new card..."
                />
                {validationError && <div className={styles.errorText}>{validationError}</div>}
                <div className={styles.buttonContainer}>
                    <button
                        type='submit'
                        onClick={handleSaveTask}
                        className={styles.addButton}
                    >
                        Add card
                    </button>
                    <button
                        type='button'
                        onClick={handleCancel}
                        className={styles.cancelButton}
                    >
                        X
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNew
