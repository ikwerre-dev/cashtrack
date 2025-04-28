import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col  w-full p-5 overflow-hidden">

      <div className="bg-[#4c27ae] h-full flex-1 rounded-[2rem]">
        <nav className="flex justify-between items-center pt-4 px-6 md:px-16 lg:px-24">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <div className="bg-black rounded-full py-4 px-12">
              <div className="flex items-center justify-center gap-2">

                <span className="text-white font-bold text-xl tracking-wider">CASH-TRACK</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="text-accent" aria-label="Menu">
              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-1.5 bg-accent rounded"></div>
                <div className="w-8 h-1.5 bg-accent rounded"></div>
                <div className="w-8 h-1.5 bg-accent rounded"></div>
              </div>
            </button>
          </div>
        </nav>

        <section className="relative px-6 grid grid-cols-3 md:px-16 lg:px-24 mt-16 md:mt-24">

          <div className="col-span-2 relative z-10 max-w-3xl">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wide">
              TRACK YOUR FINANCE
              <br />
              WITH AI
            </h1>

            <p className="text-white text-lg md:text-xl mt-8 max-w-2xl">
              We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer
              experiences.
            </p>

            <Link href="#" className="inline-block mt-12 bg-black text-[#fff] font-bold text-xl py-4 px-10 rounded-full">
              <div className="flex items-center gap-2">
                <span>GET STARTED</span>
                <span className="text-2xl"></span>
              </div>
            </Link>
          </div>

          <div className="absolute col-span-1 bottom-[-100px] right-0 h-full">

            <Image src="/hero.png"
              width={500}
              height={600}
              alt="Decorative element" className="w-full object-contain" />
          </div>
        </section>
      </div>
    </main>
  )
}
