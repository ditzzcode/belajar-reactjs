import { useState , useMemo } from "react";

function ExpensiveComponent() {
  const [count , setCount] = useState(0);
  const [number , setNumber] = useState(1);

  const expensiveCalculation = (num) => {
    console.log("calculating. . .");
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(number) , [number]);

  return (
    <div>
      <h2>count {count}</h2>
      <h2>Hasil : {result}</h2>
      <button onClick={() => setCount(count + 1)}>tambah count</button>
      <button onClick={() => setNumber(number + 1)}>tambah number</button>
    </div>
  )
}
export default ExpensiveComponent;