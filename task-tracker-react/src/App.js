// import React  from "react";
import {useState} from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App =  () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState( [
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 100) + 1
  
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ): (
        'No tasks to show'
      )}
      </div>
  )
}


// using class
// class App extends React.Component {
//   render(){
//     return <h1>HEllo from clas</h1>
//   }
// }

export default App;
