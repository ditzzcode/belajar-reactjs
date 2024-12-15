import { useState , useEffect } from "react";



export default function Api() {
  const [Api , setApi] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const takeApi = async () => {
      try{
        const api = await fetch("https://reqres.in/api/users");
        const result = await api.json();
        const { data } = result;
        setApi(data);
      } catch(err) {
        return <i>data error {err}</i>
      } finally {
        setLoading(false);
      }
    }
    takeApi();
  } ,[])

  if(loading) {
    return <i>loading . . . </i>
  }

  return (
    <>
    <ul>
      {Api.map((item) => (
        <li key={item.id}>{item.email}</li>
      ))}
    </ul>
    </>
  )
}