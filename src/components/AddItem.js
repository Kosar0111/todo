import React, { useState } from 'react'
import arrow from '../img/arrow.svg'

const AddItem = ({ addTask, tasks }) => {
    const [inputTask, setInputTask] = useState('')

    const handleChange = (event) => {
        setInputTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(inputTask)
        setInputTask('')
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSubmit(event)
        }
    }

    return (
        <div>
            <form className='add-form' onSubnit={handleSubmit}>
                <div className="add">
                    <img
                        className={tasks.length !== 0 ? 'arrow-add' : 'arrow'}
                        src={arrow}
                        alt=''
                    />
                    <input
                        className="add-item"
                        type="text"
                        value={inputTask}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} placeholder='What needs to be done?'
                        outoFocus
                    />
                </div>
            </form >
        </div>
    )
}

export default AddItem