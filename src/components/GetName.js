export default function GetName(props){

  const handleClick = () => {
    alert(`hello  ${props.name}`)
  }


  return (
    <div>
      <h2>event dengan parameter</h2>
      <button onClick={() => handleClick()}>Klik saya</button>
    </div>
  )
}