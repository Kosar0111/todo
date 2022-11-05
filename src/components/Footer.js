import React from 'react'

const Footer = ({ tasks, sortAll, removeAll, sortActive, sortComplitede }) => {

  let sort = [...tasks.filter((task) => task.complete !== true)];

  return (
    <div className='footer'>
      <div className='count'><span>{sort.length}</span><p>items left</p></div>
      <div className='sort-btn'>
        <button onClick={() => sortAll(tasks)}>All</button>
        <button onClick={() => sortActive(tasks)}>Active</button>
        <button onClick={() => sortComplitede(tasks)}>Completed</button>
      </div>
      <div className='revome-done'><button onClick={() => removeAll(tasks)}>Clear completed</button></div>
    </div>
  )
}

export default Footer