"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const features = [
    {
        icon: <Star className="w-6 h-6 text-red-500" />,
        title: "Премиальный уровень исполнения",
        desc: "Каждое событие создаётся с вниманием к деталям — от концепции до реализации.",
    },
    {
        icon: <Users className="w-6 h-6 text-red-500" />,
        title: "Команда экспертов",
        desc: "Дизайнеры, режиссёры и технические специалисты с опытом более 10 лет.",
    },
    {
        icon: <Award className="w-6 h-6 text-red-500" />,
        title: "Репутация и доверие",
        desc: "Более 300 успешных проектов для крупных брендов и частных клиентов.",
    },
    {
        icon: <CheckCircle className="w-6 h-6 text-red-500" />,
        title: "Работа под ключ",
        desc: "От идеи до полного продакшна — вы получаете готовое решение без лишних забот.",
    },
];

export default function AboutSectionVideo() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
            {/* === ВИДЕО ФОН === */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/hero-video.MP4" // 🎥 вставь сюда свой путь
                autoPlay
                loop
                muted
                playsInline
            />
            {/* === ЗАТЕМНЕНИЕ === */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            {/* === ГРАДИЕНТ СВЕТ === */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,0,0,0.25),transparent_70%)]" />

            {/* === КОНТЕНТ === */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    О&nbsp;нас —{" "}
                    <span className="italic text-red-500">АС&nbsp;Департамент</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[18px] text-gray-200 max-w-3xl mb-12 leading-relaxed"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Мы создаём мероприятия, которые объединяют, вдохновляют и оставляют
                    сильное впечатление. Наш подход — это креатив, продуманная логистика и
                    безупречная реализация на каждом этапе. <br /> <br />
                    Мы не просто организуем — мы проектируем эмоции и создаём атмосферу, в
                    которой каждый момент становится историей.
                </motion.p>

                {/* === Преимущества === */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-x-12 gap-y-8 text-left"
                >
                    {features.map((f, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="mt-1">{f.icon}</div>
                            <div>
                                <h4
                                    className="font-semibold text-white text-[16px] mb-1"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    {f.title}
                                </h4>
                                <p className="text-[14px] text-gray-300 leading-snug">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
