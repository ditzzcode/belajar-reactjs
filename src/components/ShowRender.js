import { useState , useEffect } from "react";

function TakeApi(){
  const [value , setValue] = useState([]);

  useEffect(() => {
    const TakedApi = async () => {
      try {
      const api = await fetch("https://reqres.in/api/users");
      const result = await api.json();
      const { data } = result;
      setValue(data);
      } catch (err) {
        console.error(err);
      }
    }
    TakedApi()
  } , [])

  return (
    <div>
      <ol>
        {value.map((obj) => (
          <li key={obj.id}>{obj.email}</li>
        ))}
      </ol>
    </div>
  )
}

function GetApi(){
  const [value , getValue] = useState(true)

  return (
    <div>
      {value && <TakeApi/>}
      <button onClick={() => getValue(!value)}>{value ? "sembunyikan email" : "tampilkan email"}</button>
    </div>
  )
}

export default GetApi