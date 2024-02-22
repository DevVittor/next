import Image from "next/image"
import Link from "next/link";
export default function About(){
    const foto = "https://images.pexels.com/photos/18015717/pexels-photo-18015717/free-photo-of-arquitetura-baia-doca-vaga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
       <>
        <main>
            <section>
                <div>
                    <Link href="/" className="text-white">Home</Link>
                    <h1 className="text-white">About</h1>
                    <Image 
                    height={450}
                    width={300}
                    src={foto}
                    alt="foto"
                    priority
                    />
                </div>
            </section>
        </main>
       </>
    )
}