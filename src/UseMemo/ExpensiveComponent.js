import { useState , useMemo } from "react";

function ExpensiveComponent(){
  const [count , setCount] = useState(0);
  const [number , setnumber] = useState(1)

  const expensiveCalculate = (num) => {
    console.log("calculate");
    return num * 2;
  }

  const result = useMemo(() => expensiveCalculate(number) , [number]);

  return (
    <div>
      <h1>result : {result}</h1>
      <h1>count : {count}</h1>
      <button onClick={() => setnumber(number + 1)}> tambah result</button>
      <button onClick={() => setCount(count + 1)}>tambah count</button>
    </div>
  )
}

export default ExpensiveComponent