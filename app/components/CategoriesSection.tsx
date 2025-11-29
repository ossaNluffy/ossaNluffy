"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoriesSection() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCategories() {
            try {
                const res = await fetch("/api/categories");
                const data = await res.json();
                setCategories(data);
            } catch (e) {
                console.error("Ошибка загрузки категорий:", e);
            } finally {
                setLoading(false);
            }
        }
        loadCategories();
    }, []);

    if (loading) {
        return (
            <section className="py-24 text-center text-gray-400">
                Загрузка категорий...
            </section>
        );
    }

    return (
        <section className="relative py-32 bg-gradient-to-b from-white via-[#fafafa] to-white overflow-hidden">

            <div className="relative mx-auto space-y-32">
                <h2
                    className="text-center text-5xl md:text-6xl font-serif font-semibold mb-24 text-gray-900"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Наши <span className="italic text-gray-800">направления</span>
                </h2>

                {categories.map((cat, idx) => {
                    const isReversed = idx % 2 === 1;

                    return (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, x: isReversed ? 150 : -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""
                                } items-stretch`}
                        >
                            {/* === Фото === */}
                            <div
                                className={`relative w-full md:w-[60%] h-[500px] overflow-hidden transition-all duration-700 
  ${isReversed ? "rounded-l-3xl" : "rounded-r-3xl"} 
  shadow-[0_25px_60px_rgba(0,0,0,0.15)] 
  group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]`}
                            >
                                {/* подсветка рамки при ховере */}
                                <div
                                    className={`absolute inset-0 rounded-[inherit] border border-transparent 
    group-hover:border-[rgba(255,0,0,0.25)] transition-all duration-700`}
                                />

                                {/* фон фото */}
                                <Image
                                    src={cat.coverImage || "/images/placeholder.jpg"}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                />

                                {/* затемнение + внутреннее свечение */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                                </div>

                                {/* номер блока */}
                                <div
                                    className={`absolute top-6 ${isReversed ? "right-6" : "left-6"} 
    text-9xl font-bold text-white tracking-tighter`}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                            </div>


                            {/* === Текст === */}
                            <div
                                className={`relative w-full md:w-[40%] flex items-center ${isReversed ? "md:pr-20 md:pl-10" : "md:pl-20 md:pr-10"
                                    } py-10 md:py-0`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? 150 : -150 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.25, 0.1, 0.25, 1],
                                        delay: 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="bg-white p-10 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] transition-all duration-700"
                                >
                                    <h3
                                        className="text-3xl font-serif font-semibold text-gray-900 mb-4"
                                        style={{ fontFamily: '"Playfair Display", serif' }}
                                    >
                                        {cat.name}
                                    </h3>
                                    <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                        {cat.shortDesc}
                                    </p>
                                    <Link
                                        href={`/category/${cat.slug}`}
                                        className="inline-block text-sm uppercase tracking-wide font-medium text-red-600 border-b border-red-600 hover:text-black hover:border-black transition-all"
                                    >
                                        Смотреть проекты →
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
