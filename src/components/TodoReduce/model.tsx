export interface ITodo {
  text: string,
  complete: boolean,
}

export interface ITodoAction {
  type: string,
  payload: ITodo
}
export interface IInputAction {
  type: string,
  payload: string
}

export interface ITodoState {
  inputtext: string,
  todos: ITodo[]
}
