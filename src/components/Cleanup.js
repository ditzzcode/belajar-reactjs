import { useState , useEffect } from "react";

export default function Clean(){
  const [count ,setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1)
    } , 1000);

    return () => {
      clearInterval(interval);
      console.log("interval di hentikan")
    }
  } , []);

  return (
    <h1>timer : {count}</h1>
  )
}