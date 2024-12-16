import { useState , useCallback } from "react";
import ChildComponents from "./ChildComponents";

function ParentComponents(){
  const [count , setCount] = useState(0);

    const increment = useCallback(() => {
      setCount(prevCount => prevCount + 1)
      console.log("button di tekan")
    } , [])

    return (
      <div>
        <ChildComponents increment={increment} count={count}/>
        <div>{count}</div>
        <button onClick={increment}>parent button</button>
      </div>
    )
};

export default ParentComponents;