import React, {Fragment, useReducer, useState} from 'react';

import {Link} from "react-router-dom";
import {IInputAction, ITodo, ITodoAction, ITodoState} from "./model";

//alias shortcut
type FormElem = React.FormEvent<HTMLFormElement>;

const initialState:ITodoState = {
  todos: [],
  inputtext: '',
};

const reducer = (state:ITodoState, action:ITodoAction | IInputAction) => {
  console.log(`todo reducer action:${action.type}`);
  switch(action.type) {
    case 'INPUT':
      return {...state, inputtext:action.payload};
    case 'ADD_TODO':
      const newtodo:ITodo = {...action.payload};
      return {...state, todos: [...state.todos, newtodo]};
    case 'COMPLETE_TODO':
      const ref:ITodo = action.payload;
      const newtodos:ITodo[] = state.todos.map((todo:ITodo) => {
        return todo.text !== ref.text ? todo : {...todo, complete: true}
      });
      return {...state, todos: newtodos};
    case 'REMOVE_TODO':
      const target:ITodo = action.payload;
      const todos:ITodo[] = state.todos.filter((todo:ITodo) => todo.text !== target.text);
      return {...state, todos};
    default:
      return state;
  }
};





const TodoReduce = (): JSX.Element => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e:FormElem) => {
    e.preventDefault();
    addTodo(state.inputtext);
    dispatch<IInputAction>({type:'INPUT', payload:''})
  };
  const addTodo = (text: string): void => {
    dispatch<ITodoAction>({type: 'ADD_TODO', payload: {text: text, complete: false}});
  };

  const completeTodo = (todo:ITodo): void => {
    dispatch<ITodoAction>({type: 'COMPLETE_TODO', payload:todo})
  };
  const removeTodo = (todo:ITodo): void => {
    dispatch<ITodoAction>({type: 'REMOVE_TODO', payload:todo});
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.inputtext}
               onChange={e => dispatch<IInputAction>({type: 'INPUT', payload: e.target.value})}
               required />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {
          state.todos.map((todo: ITodo, index: number) => {
            return (
              <Fragment key={index}>
                <div style={{
                  display:'flex',
                  flexDirection: 'row',
                  flexWrap: "wrap",
                  textDecoration: todo.complete ? 'line-through':'normal'
                }}>{todo.text}</div>
                <button onClick={() => completeTodo(todo)} style={{display: !todo.complete ? 'inline' : 'none'}}>
                  Complete
                </button>
                <button onClick={() => removeTodo(todo)} style={{display: todo.complete ? 'inline' : 'none'}}>
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

export default TodoReduce;
