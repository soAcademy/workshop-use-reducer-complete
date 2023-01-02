import { useReducer } from "react"

const init = (initialCount) => {
  return { count: initialCount }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
    case 'decrement':
      return { count: action.payload.count };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error()
  }
}

export const UseReducerComponent = ({ initialCount }) => {

  const [state, dispatch] = useReducer(reducer, initialCount, init)
  const { count } = state

  return (
    <div>
      <h1>FirstCounter Count: {count}</h1>
      <button onClick={() => dispatch({
        type: 'decrement',
        payload: {
          count: count - 1
        }
      })}>
        Minus 1
      </button>
      <button onClick={() => dispatch({
        type: 'increment',
        payload: {
          count: count + 1
        }
      })}>
        Plus 1
      </button>
      <button
        onClick={() => dispatch({
          type: 'reset',
          payload: initialCount })}>
        Reset
      </button>
    </div>
  )
}
