import { useState } from "react"

type Todo = {
  readonly id: number
  value: string
}

export const App = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, value: value}
        }
        return todo
      })
      return newTodos
    })
  }

  const handleSubmit = () => {
    if (!text) return

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
    }
    setTodos((todos) => [newTodo, ...todos])
    setText('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <input type="text"  value={text} onChange={(e) => handleChange(e)}/>
        <input type="submit" value="追加" />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="text" value={todo.value} onChange={(e) => handleEdit(todo.id, e.target.value)} />
            </li>
            )
        })}
      </ul>
    </div>
  )
}
