import React, { Fragment, useState } from 'react';

import {Link} from "react-router-dom";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string,
  complete: boolean,
}

const TodoList = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e:FormElem) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [{text, complete: false}, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    todos[index].complete = true;
    setTodos(newTodos);
  };
  const removeTodo = (index: number): void => {
    debugger;
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {
          todos.map((todo: ITodo, index: number) => {
            return (
              <Fragment key={index}>
                <div style={{
                  display:'inline',
                  textDecoration: todo.complete ? 'line-through':'normal'
                }}>{todo.text}</div>
                <button onClick={() => completeTodo(index)} style={{display: !todo.complete ? 'inline' : 'none'}}>
                  Complete
                </button>
                <button onClick={() => removeTodo(index)} style={{display: todo.complete ? 'inline' : 'none'}}>
                  &times;
                </button>
              </Fragment>
            )
          })
        }
      </section>
      <Link to="/">Home</Link>
    </>
  )
};

export default TodoList;
