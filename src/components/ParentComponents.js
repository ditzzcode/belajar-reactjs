import { useRef , forwardRef , useEffect } from "react";


const ChildInputs = forwardRef((props , ref) => {
    return <input type="text" ref={ref}/>
})


function ParentComponent(){
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
} , [])

return (
  <div>
    <h2>forwading refs</h2>
    <ChildInputs ref={inputRef}/>
  </div>
)
}

export default ParentComponent