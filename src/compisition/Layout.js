export default function Layout({tilte , children , action}){
  return (
    <div className="layout">
      <header>{tilte}</header>
      <main>{children}</main>
      <footer>{action}</footer>
    </div>
  )
}