import { useReducer } from "react";

const reducer = (state , action) => {
  switch (action.type){
    case 'INCREMENT':
      return {count : state.count + 1};
    case 'DECREMENT':
      return {count : state.count - 1};
    case 'RESET':
      return {count : 0}
    default:
      return state;

  }
}

function Counter(){
  const initialState = {count : 0}
  const [state , disPatch] = useReducer(reducer , initialState);

  return (
    <div>
      <h1>count : {state.count}</h1>
      <button onClick={() => disPatch( { type : 'INCREMENT'})}>+</button>
      <button onClick={() => disPatch( { type: 'DECREMENT'} )}>_</button>
      <button onClick={() => disPatch( { type: 'RESET'} )}>RESET</button>
    </div>
  )
}

export default Counter