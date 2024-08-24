import { useState, ChangeEvent } from 'react'
import './App.css'
import { Itask } from './interfaces/Interfaces';
import TodoTask from './components/TodoTask';

function App() {
  const [task,setTask]=useState<string >('');
  const [deadline,setDeadline]=useState<number>(0);
  const [todo,setTodo]=useState<Itask[]>([]);

  const handleChange=(event : ChangeEvent<HTMLInputElement>) :void =>{
    if (event.target.name ==="task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
  }

  const removeTask=(tasktodelete:string): void=>{
    setTodo(todo.filter((task)=>{
      return task.taskName!=tasktodelete;
    }));
  }

  const addTask = ():void =>{
    const newTask={taskName : task, deadline: deadline}
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask("");
    setDeadline(0);
    }

  return (
    <div className='App'>
    
      <h2 className='title'>TO DO LIST </h2>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' value={task} placeholder='To do..' onChange={handleChange} name="task">
          </input>
          <input type='number' value={deadline} placeholder='in number of days' onChange={handleChange} name='deadline'>
          </input>
        </div>
        
        <button onClick={addTask}>ADD TASK</button>

      </div>
      
      <div className='toDo'>
      {todo.map((task:Itask, key:number)=>{
        return<TodoTask key={key} task={task} removeTask={removeTask}></TodoTask>
      })}
      </div>
    
    </div>
    
  )
}

export default App
