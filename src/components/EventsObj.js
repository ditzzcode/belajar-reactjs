import { useEffect , useState , useRef} from "react"

function EventsObject(){
  const [count , setCount] = useState(0)
  const preventRef = useRef(count)


  useEffect(() => {

    console.log("button on Click")
    preventRef.current = count
  } , [count])


  function handleClick(event){
    setCount(count + 1)
    console.log(count)
    console.log("event target" , event.target)
  }



  return (
    <div>
      <h2>event object</h2>
      <div>{count}</div>
      <div>{preventRef.current}</div>
    <button onClick={handleClick}>check event</button>
    </div>
  )
}

export default EventsObject