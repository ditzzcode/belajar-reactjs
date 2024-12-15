export default function Conditional( { login  , title} ) {
return (
  <h1>{login ? title : "mohon login"}</h1>
)
}