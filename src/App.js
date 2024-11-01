import './App.css';
import { useState, } from 'react'
import Head from './component/head'

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [user, users] = useState({ id: 1, name: 'sender', age: 11, sex: '男' })
  const obj = 'tome'
  const add = () => {
    if (task.length) setTodos([...todos, { text: task }])
  }
  const removeTodo = (e) => {
    // console.log(e)
    setTodos(todos.filter((_, i) => i !== e))
  }

  const edtiObj = (e) => {
    console.log(e)
    users((item) =>
      ({ ...item, name: e })
    )
  }

  const editSex = (e) => {
    users((item) =>
      ({ ...item, sex: e })
    )
  }
  return (
    <div>
      <Head obj={obj} user={user} onData={edtiObj} editObje={editSex} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="输入添加的内容" />
      <button onClick={
        add
      }>add</button>
    </div>
  )
}


export default App;
