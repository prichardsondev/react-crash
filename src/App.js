import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask,setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: 'Nov 30th at 2:30',
      reminder: true
    },
    {
      id: 2,
      text: "Dentist Appointment",
      day: 'Dec 5th at 12:00',
      reminder: true
    },
    {
      id: 3,
      text: "Return some shit",
      day: 'Nov 27th at 2:30',
      reminder: true
    },

  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.max.apply(Math, tasks.map(o => o.id)) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task ));
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> : 
        "No Tasks you lazy fuck"}
    </div>
  );
}

export default App;
