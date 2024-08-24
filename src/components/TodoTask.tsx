import React from 'react'
import { Itask } from '../interfaces/Interfaces'
import './TodoTask.css'

interface Props{
    task:Itask;
    removeTask(tasktodelete:string):void;
}
const TodoTask = ({task, removeTask}:Props) => {
    
  return (
    <div className='todobody'>
        <div className='tasks'>
            <span>
                {task.taskName}
            </span>
            <span>
                {task.deadline}
            </span>
        </div>
        <div>
            <button onClick={()=>{removeTask(task.taskName)}}>Done</button>
        </div>
    </div>
    
  )
}

export default TodoTask
