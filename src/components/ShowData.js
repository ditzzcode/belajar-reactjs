import { useState , useEffect } from "react";

function DataS() {
useEffect(() => {
  console.log("Data dibuat dan ditampilkan")

  return () => {
    console.log("data dihapus")
  }
} , [])

const data = [
  {id : 1 , nama : "wawan"},
  {id : 2 , nama : "anto"},
  {id : 3 , nama : "sukiman"}
];

return (
  <div>
    <ol>
      {data.map((obj) => (
        <li key={obj.id}>{obj.nama}</li>
      ))}
    </ol>
  </div>
)
}

function Show(){
  const [value , setValue] = useState(true);

  return (
    <div>
      {value && <DataS/>}
      <button onClick={() => setValue(!value)}>{value ? "sembunyikan data" : "tampilkan data"}</button>
    </div>
  )
}

export default Show