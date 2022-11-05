import React from 'react'
import removeSvg from '../img/remove.svg'

const Item = ({ task, handleToggle, removeTask }) => {

    let style = { display: task.display !== 'active' ? 'flex' : 'none' }
    return (
        <div className='list' style={style}>
            <div
                className={task.complete ? 'check-done' : 'check'}
                onClick={() => handleToggle(task.id)} >
            </div>
            <div className={task.complete ? 'task-done' : 'task'}
                onClick={() => handleToggle(task.id)}>{task.task}
            </div>
            <img
                className='remove__icon'
                src={removeSvg} alt='Remove icon'
                onClick={() => removeTask(task.id)} />
        </div >
    )
}

export default Item