// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header — logo */}
      <div className="max-w-215 mx-auto px-8 pt-[10vh]">
        <Image
          src="/logo.png"
          alt="Nonterritorial"
          width={120}
          height={120}
          className="w-[clamp(60px,10vw,120px)]"
          priority
        />
      </div>

      {/* Main */}
      <div className="max-w-215 mx-auto px-8 pt-[7vh] pb-[6vh]">

        <h1 className="text-[24px] font-normal uppercase tracking-[0.06em] mb-1.5">
          Nonterritorial
        </h1>
        <h2 className="text-[14px] font-normal uppercase tracking-widest text-[#888] mb-[8vh]">
          Manifesto
        </h2>

        <p className="text-[28px] leading-[2.1] tracking-[0.03em] text-[#888] max-w-120">
          {[
            "La vita intesa",
            "come opera d'arte",
            "esige che noi riconosciamo",
            "la moltitudine",
            "di narrazioni metafisiche imposte,",
            "il cui scopo principale",
            "è distruggere la creatività della vita.",
            "Il tentativo di fare della vita",
            "una mera riproduzione di alcune",
            "concezioni morali,",
            "di certi valori e di certe regole sociali",
            "è il segno di un'irritante stupidità",
            "e dell'incapacità di affrontare",
            "l'esistenza coraggiosamente.",
            "Noi riserviamo a noi stessi",
            "la sfida di reperire uno spazio",
            "in cui ogni cosa",
            "non sia altro che una permanenza pacifica,",
            "che non ha aspirazioni,",
            "che non vuole produrre effetti,",
            "ma che rivendica ed esalta",
            "appassionatamente il suo unico",
            "e irripetibile vagabondare per l'universo.",
            "Solo un'esistenza simile",
            "è degna di una risata cosmica",
            "che irrompe",
            "col suo suono",
            "e poi si spegne",
            "senza lasciare un eco.",
            "E abbrevia la distanza tra l'Arte e la Vita.",
          ].map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>
      </div>

      {/* Footer */}
      <footer className="max-w-215 mx-auto px-8 pt-[8vh] pb-[6vh] border-t border-[#1a1a1a] flex flex-wrap gap-x-20 gap-y-8">

        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#444] mb-1">
            Contact
          </span>
          <a
            href="mailto:i@nonterritorial.foundation"
            className="text-[12px] text-[#777] no-underline uppercase tracking-[0.08em] hover:text-white transition-colors duration-200"
          >
            i@nonterritorial.foundation
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#444] mb-1">
            Links
          </span>
          <a
            href="https://nonterritorial.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#777] no-underline uppercase tracking-[0.08em] hover:text-white transition-colors duration-200"
          >
            Nonterritorial Network
          </a>
          <a
            href="#"
            className="text-[12px] text-[#777] no-underline uppercase tracking-[0.08em] hover:text-white transition-colors duration-200"
          >
            Press
          </a>
        </div>

      </footer>
    </main>
  );
}