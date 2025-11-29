"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const reviews = [
    {
        name: "Александр Иванов",
        position: "Генеральный директор, «Альтаир Групп»",
        text: "Команда Event Bureau провела наш корпоратив на уровне, о котором мечтали. Всё — от декора до сценария — было идеально организовано.",
        image: "/images/reviews/alexander.jpg",
    },
    {
        name: "Екатерина Смирнова",
        position: "Менеджер по маркетингу, «ProMedia»",
        text: "Благодарим за профессионализм и внимание к деталям. Событие прошло безупречно, гости в восторге, а мы — спокойны.",
        image: "/images/reviews/ekaterina.jpg",
    },
    {
        name: "Игорь Седов",
        position: "Основатель, Sedov Fitness",
        text: "Ребята из Event Bureau сделали наш фестиваль спорта незабываемым. Атмосфера и организация — на высшем уровне!",
        image: "/images/reviews/igor.jpg",
    },
];

export default function ReviewsSection() {
    return (
        <section className="relative py-32 bg-[#fdfdfd] border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-5xl font-serif font-semibold mb-24 text-gray-900"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Отзывы <span className="italic text-red-600">клиентов</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-14">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.07)] transition-all duration-500 px-10 py-12"
                        >
                            {/* === Quote === */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-red-100 opacity-70" />

                            {/* === Автор === */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-[64px] h-[64px] min-w-[64px] rounded-full overflow-hidden shadow-sm border border-gray-100 bg-gray-100 flex items-center justify-center">
                                    <Image
                                        src={r.image || "/images/placeholder.jpg"}
                                        alt={r.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-[17px] leading-tight">
                                        {r.name}
                                    </h4>
                                    <p className="text-[14px] text-gray-500 leading-snug">
                                        {r.position}
                                    </p>
                                </div>
                            </div>

                            {/* === Цитата === */}
                            <p
                                className="text-[16.5px] text-gray-700 leading-relaxed italic font-light tracking-wide"
                                style={{ fontFamily: '"Playfair Display", serif' }}
                            >
                                “{r.text}”
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
