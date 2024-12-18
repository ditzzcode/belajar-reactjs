export default function Dialog(props){
  return (
    <div className="dialog">
      <h1>{props.title}</h1>
      <h3>{props.content}</h3>
      <div>{props.action}</div>
    </div>
  )
}