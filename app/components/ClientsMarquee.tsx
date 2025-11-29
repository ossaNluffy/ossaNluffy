"use client";

import Image from "next/image";

type Logo = { src: string; alt: string };
type Props = {
    logos?: Logo[];
    speed?: number; // сек на один цикл (меньше — быстрее)
};

const DEFAULT_LOGOS: Logo[] = [
    { src: "/images/clients/nike.svg", alt: "Nike" },
    { src: "/images/clients/coca-cola.svg", alt: "Coca-Cola" },
    { src: "/images/clients/microsoft.svg", alt: "Microsoft" },
    { src: "/images/clients/samsung.svg", alt: "Samsung" },
    { src: "/images/clients/mercedes.svg", alt: "Mercedes-Benz" },
    { src: "/images/clients/red-bull.svg", alt: "Red Bull" },
];

export default function ClientsMarquee({ logos = DEFAULT_LOGOS, speed = 30 }: Props) {
    // Дублируем массив для бесшовности
    const track = [...logos, ...logos];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
                    Нам доверяют
                </h2>

                <div className="relative overflow-hidden group">
                    {/* мягкие градиенты по краям */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Лента */}
                    <div
                        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
                        style={
                            {
                                "--duration": `${speed}s`,
                            } as React.CSSProperties
                        }
                    >
                        {track.map((logo, i) => (
                            <div
                                key={`${logo.alt}-${i}`}
                                className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={150}
                                    height={64}
                                    className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS анимация */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* уходим на ширину первой половины */
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
      `}</style>
        </section>
    );
}
