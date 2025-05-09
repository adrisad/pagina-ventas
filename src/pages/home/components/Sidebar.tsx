import type React from "react"

function Sidebar({children,}: {children: React.ReactNode;}) {
  return (
    <div className="grid md:grid-cols-[20%_1fr] h-screen">
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
      <div className='bg-amber-400 flex flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  )
}

export default Sidebar