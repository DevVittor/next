import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div className="flex items-center h-auto w-full justify-between pr-[50px] pl-[50px] pt-[10px] border border-t-0 border-r-0 border-l-0 border-b-white">
        <div className="">
          <h1 className="text-white text-[24px] font-bold">AcompX</h1>
        </div>
        <div className="">
          <nav>
            <ul className="flex items-center gap-[10px] pb-[10px] bg-black text-white font-medium">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="acompanhantes">Acompanhantes</Link></li>
              <li><Link href="sobre">Sobre</Link></li>
              <li><Link href="contato">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
