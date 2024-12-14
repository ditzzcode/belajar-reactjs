export default function MyButton(){
  const clicked = () => {
    return alert("button ini di klick")
  }

  return (
    <button onClick={() => clicked()}>click me bro</button>
  )
}