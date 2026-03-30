// src/app/page.tsx
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 md:px-24">
      <div className="w-full max-w-140 text-center space-y-12 md:space-y-16">
        <h1 className="text-base md:text-lg uppercase tracking-[0.25em] font-normal">
          Nonterritorial Foundation
        </h1>

        <div className="space-y-6 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-normal">
            Autonomous infrastructure for art circulation
          </p>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Nonterritorial is a network that brings artwork into unusual circulation — through private and public hosts, without moving objects, without shipping, without art world gatekeeping. Artists and artwork owners become exhibitors, presenting temporary exhibitions through audiovisual frameworks. Hosts become curators. A private space in Rome, a building in Tokyo, a community center in Stockholm — all equivalent nodes in the same network.
          </p>
          <div className="border-t border-white/10 pt-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-normal">
              日本語
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-normal">
              アート流通のための自律的インフラ
            </p>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              「Nonterritorial」は、私的・公的なホストを通じて、作品を物理的に移動させたり輸送したりすることなく、またアート界のゲートキーピングなしに、作品を型破りな形で流通させるネットワークです。アーティストや作品の所有者は展示者となり、オーディオビジュアルの枠組みを通じて一時的な展覧会を提示します。ホストはキュレーターとなります。ローマのプライベートスペース、東京のビル、ストックホルムのコミュニティセンター——これらはすべて、同じネットワーク上の対等なノードです。
            </p>
          </div>
        </div>

        <div className="space-y-4">
            
          <a
            href="https://nonterritorial.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white/25 px-7 py-4 text-base tracking-[0.05em] hover:text-gray-500"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-white/45 mb-1">
              Private Exhibitions
            </span>
            Nonterritorial
          </a>
           <a
            href="https://sonicroom.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white/25 px-7 py-4 text-base tracking-[0.05em] hover:text-gray-500"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-white/45 mb-1">
              Sonic Library for Deep Listening
            </span>
            Sonic Room
          </a>
        </div>

        <div className="py-8">
          <Image
            src="/logo.png"
            alt="Nonterritorial"
            width={180}
            height={180}
            className="mx-auto w-35 md:w-45"
            priority
          />
        </div>

        <footer className="text-xs text-white/40 leading-loose">
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