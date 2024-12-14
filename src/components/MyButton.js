import { useState } from "react"

export default function MyButton(){
const [getValue = 0, setValue] = useState(0)
const [getWord , setWord] = useState("")

  const plus = () => {
    setValue(getValue + 1)
    if(getValue >= 19) {
      setWord("button ini sudah di klick sebanyak " + getValue)
    }
  }

  const minus = () => {
    setValue(getValue - 1)
    if(getValue <= 0) {
      alert("angka tidak bisa negatif")
      setValue(0)
    }
  }



  return (
    <div>
      <div>{getWord}</div>
      <div>{getValue}</div>
      <button onClick={() => plus()}>plus</button>
      <button onClick={() => minus()}>minus</button>
    </div>
  )
}