import { useState , useMemo } from "react";

function ExpensiveComponents(){
  const [count , setCount] = useState(0);
  const [number ,setNumber] = useState(1);

  const expensiveCalculate = (num) => {
    console.log("procesing...")
    return num * 2
  }

  const result = useMemo(() => expensiveCalculate(number) , [number]);

  return (
    <div>
      <h2>result : {result}</h2>
      <button onClick={() => setCount(count + 1)}>tombol count</button>
      <button onClick={() => setNumber(number + 1)}>tombol result</button>
    </div>
  )
}

export default ExpensiveComponents