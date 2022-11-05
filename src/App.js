import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Item from './components/Item';

const App = () => {
  const [tasks, setTask] = useState([])

  const addTask = (inputTask) => {
    if (inputTask) {
      const newItem = {
        id: Math.random().toString().substring(2, 9),
        task: inputTask,
        complete: false,
        display: ''
      }
      setTask([...tasks, newItem])
    }
  }

  const removeTask = id => {
    setTask([...tasks.filter((task) => task.id !== id)])
  }

  const handleToggle = id => {
    setTask([
      ...tasks.map((task) => task.id === id ?
        { ...task, complete: !task.complete } :
        { ...task }
      )])
  }

  const removeAll = tasks => {
    setTask([
      ...tasks.filter(task => task.complete !== true
      )])
  }

  const sortAll = tasks => {
    setTask([
      ...tasks.map(task => task.complete === true || task.complete === false ? { ...task, display: '' } : { ...task, display: '' }
      )])
  }

  const sortActive = tasks => {
    setTask([
      ...tasks.map(task => task.complete ? { ...task, display: 'active' } : { ...task, display: '' }
      )])
  }

  const sortComplitede = tasks => {
    setTask([
      ...tasks.map(task => task.complete !== true ? { ...task, display: 'active' } : { ...task, display: '' }
      )])
  }


  return (
    <div className="wrapper">
      <h1>todo list</h1>
      <AddItem
        addTask={addTask}
        tasks={tasks} />
      {tasks.map(task => {
        return (
          <Item
            task={task}
            key={task.id}
            handleToggle={handleToggle}
            removeTask={removeTask}
            sortActive={sortActive}
            sortComplitede={sortComplitede}
          />
        )
      })}
      {tasks.length > 0 ?
        <Footer
          tasks={tasks}
          setTask={setTask}
          removeAll={removeAll}
          sortAll={sortAll}
          sortActive={sortActive}
          sortComplitede={sortComplitede}
        /> : <div className='empty'>You haven't had any affairs yet.</div>}
      <h5>press Enter to add item</h5>
    </div >
  );
}

export default App;
