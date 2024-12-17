import { useReducer } from "react";

const cartRecuder = (state ,action) => {
  switch(action.types){
    case 'ADD_ITEM':
      return {items : [...state.items, action.load]};
    case 'REMOVE_ITEM':
      return {items : state.items.filter(item => item.id !== action.load.id)};
    default:
      return state;
  }
}

function ShoopingCart() {
  const initialState = {items: []};
  const [state ,dispatch] = useReducer(cartRecuder ,initialState );

  const addItem = () => {
    dispatch({
      types:"ADD_ITEM",
      load:{ id: Date.now(), name:'Item baru'}
    });
}

const removeItem =  ( id ) => {
  dispatch({
    types:"REMOVE_ITEM",
    load: {id}
  })
}

  return (
    <div>
      <h1>keranjang belanja</h1>
      <button onClick={addItem}>tambah item</button>

      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoopingCart