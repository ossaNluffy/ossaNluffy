"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeroVideo() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // fallback: убираем прелоадер через 7 сек, если видео не успело догрузиться
        const timer = setTimeout(() => setIsLoaded(true), 7000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-[100vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">

            {/* === ВИДЕО ФОН === */}
            <video
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.5s] ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                src="/videos/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setIsLoaded(true)}
            />

            {/* === Затемнение === */}
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />

            {/* === КРАСИВЫЙ ПРЕЛОАДЕР === */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
                    >
                        {/* Название бренда / логотип */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                            className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wider"
                            style={{
                                fontFamily: '"Playfair Display", serif',
                                textShadow: "0 0 25px rgba(255,0,0,0.5)",
                            }}
                        >
                            Event<span className="text-red-500">Bureau</span>
                        </motion.h1>

                        {/* Мягкий слоган */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                            className="mt-4 text-sm md:text-base tracking-widest text-gray-400 uppercase"
                            style={{
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: "0.3em",
                            }}
                        >
                            loading experience
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === Контент === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 px-6 max-w-3xl mx-auto"
            >
                <h1
                    className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight tracking-tight text-white"
                    style={{
                        fontFamily: '"Playfair Display", serif',
                        textShadow: "0 4px 20px rgba(0,0,0,0.7)",
                    }}
                >
                    <span className="text-white">АС&nbsp;</span>
                    <span className="text-red-500">Департамент</span>
                    <br />
                    <span className="text-white">организация событий</span>
                    <br />
                    <span className="text-white">в стиле&nbsp;</span>
                    <span className="text-red-500">премиум</span>
                </h1>

                <p
                    className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide"
                    style={{
                        fontFamily: '"Inter", sans-serif',
                        textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                >
                    Мы создаём события, которые вдохновляют, объединяют и остаются в&nbsp;памяти.
                    <br className="hidden sm:block" />
                    От&nbsp;камерных ужинов до&nbsp;масштабных конференций.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#categories"
                        className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-medium text-lg shadow-md text-white"
                    >
                        Посмотреть проекты
                    </Link>
                    <Link
                        href="#contact"
                        className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-medium text-lg"
                    >
                        Связаться с нами
                    </Link>
                </div>
            </motion.div>

            {/* Нижний градиент */}
            <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>
    );
}
