function Sidebar() {
  return (
    <aside className="bg-blue-400 hidden md:block">
      <div>
        <h2>Titulo</h2>
        <nav className="flex flex-col justify-center items-center bg-emerald-500">
          <a href="">Home</a>
          <a href="">Vender</a>
          <a href="">Kardex</a>
          <a href="">Reportes</a>
        </nav>
      </div>
      <nav className="bg-red-400 flex flex-col justify-center items-center">
        <a href="">configuracion</a>
        <a href="">Mas</a>
      </nav>
    </aside>
  )
}

export default Sidebar