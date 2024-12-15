import { useEffect , useRef } from "react";

function Focus(){
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  } , []);

  return (
    <div>
      <h2>fokus pada input</h2>
      <input type="text" ref={inputRef}/>
    </div>
  )
}

export default Focus