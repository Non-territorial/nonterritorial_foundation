// src/app/page.tsx
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 md:px-24">
      <div className="w-full max-w-[560px] text-center space-y-12 md:space-y-16">
        <h1 className="text-sm md:text-base uppercase tracking-[0.25em] font-normal">
          Nonterritorial Foundation
        </h1>

        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
          Building autonomous infrastructure for art circulation
        </p>

        <div className="space-y-4">
             <a
            href="https://sonicroom.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white/25 px-7 py-4 text-sm tracking-[0.05em] transition hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.12em] text-white/45 mb-1">
              Sonic Library for Deep Listening
            </span>
            Sonic Room
          </a>
          <a
            href="https://nonterritorial.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white/25 px-7 py-4 text-sm tracking-[0.05em] transition hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.12em] text-white/45 mb-1">
              Private Exhibitions
            </span>
            Nonterritorial
          </a>

          <a
            href="https://www.nonterritorial.network"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white/25 px-7 py-4 text-sm tracking-[0.05em] transition hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.12em] text-white/45 mb-1">
              Network & Technology
            </span>
            Nonterritorial Network
          </a>
        </div>

        <div className="py-8">
          <Image
            src="/logo.png"
            alt="Nonterritorial"
            width={180}
            height={180}
            className="mx-auto w-[140px] md:w-[180px]"
            priority
          />
        </div>

        <footer className="text-[11px] text-white/40 leading-loose">
          <a
            href="mailto:info@nonterritorial.foundation"
            className="hover:text-white/70 transition"
          >
            info@nonterritorial.foundation
          </a>
          <br />
          Nonterritorial Foundation · Rome, Italy · London, UK · Vilnius, Lithuania
        </footer>
      </div>
    </main>
  );
}