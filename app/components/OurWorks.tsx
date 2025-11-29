"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function OurWorks({ categories }: { categories: any[] }) {
    const [activeCat, setActiveCat] = useState(categories[0]?.id || null);
    const activeCategory = categories.find((c) => c.id === activeCat);

    return (
        <section className="relative py-32 bg-gradient-to-b from-white via-[#fafafa] to-white text-gray-900 overflow-hidden">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.05),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.04),transparent_30%)]" /> */}

            <div className="relative max-w-[1400px] mx-auto px-6">
                {/* === Заголовок === */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-5xl md:text-6xl font-serif font-semibold mb-20"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Наши <span className="italic text-gray-800">работы</span>
                </motion.h2>

                {/* === Навигация в стиле журнала === */}
                <div className="flex flex-wrap justify-center gap-8 mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`relative pb-1 text-[18px] uppercase tracking-[0.08em] transition-all duration-500 
        font-light 
        ${activeCat === cat.id
                                    ? "text-gray-900"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            {cat.name}
                            {/* Подчёркивание */}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-500 
          ${activeCat === cat.id
                                        ? "bg-red-500 scale-x-100"
                                        : "bg-gray-300 scale-x-0 group-hover:scale-x-100"
                                    }`}
                                style={{ transformOrigin: "center" }}
                            ></span>
                        </button>
                    ))}
                </div>


                {/* === Контент категории === */}
                <AnimatePresence mode="wait">
                    {activeCategory && (
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="space-y-28"
                        >
                            <h3
                                className="text-center text-2xl uppercase tracking-[0.2em] text-gray-500 mb-16"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {activeCategory.name}
                            </h3>

                            {/* === Карточки === */}
                            {activeCategory.events.slice(0, 3).map((event: any, idx: number) => {
                                const isReversed = idx % 2 === 1;
                                return (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, x: isReversed ? 150 : -150 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: isReversed ? -150 : 150 }}
                                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                                        className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""
                                            } items-center gap-10 md:gap-20`}
                                    >
                                        {/* === Фото === */}
                                        <motion.div
                                            className={`relative w-full md:w-[60%] h-[450px] overflow-hidden rounded-3xl 
                                                shadow-[0_25px_60px_rgba(0,0,0,0.12)] 
                                                group hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)] transition-all duration-700`}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            <Image
                                                src={event.coverImage || "/images/placeholder.jpg"}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                                            <div
                                                className={`absolute top-6 ${isReversed ? "right-6" : "left-6"
                                                    } text-8xl font-bold text-white/25`}
                                            >
                                                {String(idx + 1).padStart(2, "0")}
                                            </div>
                                        </motion.div>

                                        {/* === Текст === */}
                                        <motion.div
                                            className="w-full md:w-[40%]"
                                            initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                                        >
                                            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] transition-all duration-700">
                                                <h3
                                                    className="text-3xl font-serif font-semibold text-gray-900 mb-4"
                                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                                >
                                                    {event.title}
                                                </h3>
                                                <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                                    {event.brief}
                                                </p>
                                                {event.concept && (
                                                    <p className="text-gray-500 italic text-[14px] mb-4">
                                                        {event.concept}
                                                    </p>
                                                )}
                                                <Link
                                                    href={`/category/${activeCategory.slug}?event=${event.slug}`}
                                                    className="inline-block text-sm uppercase tracking-wide font-medium text-red-600 border-b border-red-600 hover:text-black hover:border-black transition-all"
                                                >
                                                    Смотреть проекты →
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
