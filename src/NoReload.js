export default function NoReload(){
  function handleSumbit(events){
    events.preventDefault();
    alert("form berhasil di kirim")

  }

  return (
    <div>
      <h2>prevent default</h2>
      <form onSubmit={handleSumbit} >
        <button type="submit">sumbit</button>
      </form>
    </div>
  )
}