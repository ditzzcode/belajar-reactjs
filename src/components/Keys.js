export default function Keys(){
  const animals = ["pig" , "chiken" , "ayam" , "monkey" , "bat"];
  const foods = ["ikan" , "telur" , "daging"]
  const students = [
    {id : 1 , name : "radit"},
    {id : 2 , name :"kadek"},
    {id : 3 , name : "raditya"}
  ]

  return (
    <>
    <ol>
      {animals.map((animal , index) => (
        <li key={index}>{animal}</li>
      ))}
    </ol>
      <ul>{foods.map((food , index) => (
        <li key={index}>{food}</li>
      ))}</ul>
      <ol>
        {students.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </>

  )
}