import  { useState, useEffect } from 'react';

function ChildComponent(){
  useEffect(() => {
    console.log("komponen di did mount");

   return () => {
    console.log("komponen di un-mount");
   }
  } , []);

  return <h1>component child</h1>
}

function ParentComponent() {
  const [value ,setValue] = useState(true);

  return (
    <div>
     <button onClick={() => setValue(!value)}>cliked</button>

    {value && <ChildComponent/>}
    </div>

  )
}

export default ParentComponent



