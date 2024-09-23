import { useState } from "react"

type Todo = {
  readonly id: number
  value: string
  checked: boolean
  removed: boolean
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

  const handleCheck = (id: number, checked: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, checked}
        }
        return todo
      })
      return newTodos
    })
  }

  const handleRemove = (id: number, removed: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, removed}
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
      checked: false,
      removed: false,
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
              <input
                type="checkbox"
                checked={todo.checked}
                disabled={todo.removed}
                onChange={() => handleCheck(todo.id, !todo.checked)}
              />
              <input
                type="text"
                disabled={todo.checked || todo.removed}
                value={todo.value}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
              />
              <button onClick={() => handleRemove(todo.id, !todo.removed)}>{todo.removed ? '復元' : '削除'}</button>
            </li>
            )
        })}
      </ul>
    </div>
  )
}
