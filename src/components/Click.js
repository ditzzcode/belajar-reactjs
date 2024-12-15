import { useState , useEffect } from "react";


function Check(){
  useEffect(() => {
    console.log("count genap ")

    return () => {
      console.log("count ganjil")
    }
  } ,[])

  return <h1>button di klick</h1>
}

export default function Click(){
const [value , setValue] = useState(true);
const [count , setCount] = useState(0);

const Hilang = () => {
  return <h1>damn bro</h1>
}

if (count > 20) {
   alert("sudah cukup")
   setCount(0)
}

return  (
  <div>
    <div>button di klick sebanyak {count} kali</div>
    <button onClick={() => {setValue(!value); setCount(count + 1)}}>
      {count % 2 === 0 ? "button genap" : "button ganjil"}
    </button>
    {value ? <Check/> : <Hilang/> }
  </div>


)

}