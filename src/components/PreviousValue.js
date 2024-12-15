import { useState , useEffect , useRef } from "react";

function PreviousValue(){
  const [count , setCount] = useState(0);
  const preventRef = useRef(count);

  useEffect(() => {
    preventRef.current = count;
  } , [count])

return (
  <div>
    <h2>count : {count}</h2>
    <h2>count sebelum : {preventRef.current}</h2>
    <button onClick={() => setCount(count + 1)}>nambah count</button>
    <button onClick={() => setCount(count - 1)}>kurangi count</button>
  </div>
)
}

export default PreviousValue;