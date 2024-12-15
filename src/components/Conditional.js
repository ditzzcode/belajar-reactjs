export default function Conditional( { login  , title} ) {
 if (login === true) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Laboris exercitation dolore ea magna elit eu ex. Cupidatat velit dolore ad commodo ullamco esse incididunt laboris. Voluptate laboris ad elit veniam elit amet veniam dolore. Cupidatat esse culpa Lorem sunt esse quis eiusmod minim in ea aliqua veniam deserunt anim. Laborum fugiat laboris consectetur sunt qui sunt tempor incididunt pariatur consequat proident fugiat. Aliqua cillum cillum quis consectetur duis sint ea occaecat ut. Ullamco fugiat voluptate et commodo et excepteur sunt enim elit ad.</p>
    </div>

  )
 } else {
  return <h1>mohon untuk login</h1>
 }
}