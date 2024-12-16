import { useState  , useRef , useEffect} from "react";

export default function ChangeInput(){
  const [text , setText] = useState("");
  const preventRef = useRef(null)

  useEffect(() => {
    preventRef.current = 0;
  })

  function HandleChange(events){
    setText(events.target.value)
  }

  return (
    <div>
      <h2>input onchange</h2>
      <input type="text" onChange={HandleChange} />
      <p> isi input : { text } </p>
    </div>
  )
}