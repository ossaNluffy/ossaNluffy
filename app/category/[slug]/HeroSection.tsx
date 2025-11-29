"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ category }: { category: any }) {
    return (
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
            {category.coverImage && (
                <Image
                    src={category.coverImage}
                    alt={category.name}
                    fill
                    priority
                    className="object-cover object-center brightness-[0.55]"
                    unoptimized
                />
            )}

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white via-white/60 to-transparent" />

            <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6 tracking-tight"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    {category.name}
                </motion.h1>

                {category.shortDesc && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Inter", sans-serif',
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        }}
                    >
                        {category.shortDesc}
                    </motion.p>
                )}

                {category.longDesc && (
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
                        style={{
                            fontFamily: '"Inter", sans-serif',
                            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                        }}
                    >
                        {category.longDesc}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
