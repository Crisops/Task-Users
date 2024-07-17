import { useTask } from '../hooks/useTask'
import './css/Tasks.css'
import Task from '../components/Task'

function Tasks () {
  const { tasks } = useTask()

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(340px,_1fr))] p-5 gap-4 overflow-y-auto'>
      {
        tasks.length !== 0 &&
        tasks.map(({ _id, title, description }) => (<Task key={_id} idTask={_id} title={title} description={description} />))
      }
    </div>
  )
}

export default Tasks
