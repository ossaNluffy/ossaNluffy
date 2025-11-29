"use client";

import { motion } from "framer-motion";
import { Lightbulb, Calendar, Users, Video, PartyPopper } from "lucide-react";

const steps = [
    {
        icon: <Lightbulb className="w-7 h-7 text-red-600" />,
        title: "Идея и концепция",
        desc: "Погружаемся в задачу клиента, создаём уникальную идею события и визуальный стиль.",
    },
    {
        icon: <Calendar className="w-7 h-7 text-red-600" />,
        title: "Планирование",
        desc: "Прорабатываем тайминг, сценарий, бюджет и логистику — всё под контролем.",
    },
    {
        icon: <Users className="w-7 h-7 text-red-600" />,
        title: "Подбор команды",
        desc: "Привлекаем режиссёров, дизайнеров, артистов и подрядчиков под конкретный формат.",
    },
    {
        icon: <Video className="w-7 h-7 text-red-600" />,
        title: "Продакшн и репетиции",
        desc: "Всё отрабатывается заранее: свет, звук, видео и сценарий — без случайностей.",
    },
    {
        icon: <PartyPopper className="w-7 h-7 text-red-600" />,
        title: "День события",
        desc: "Мы управляем всем процессом и гарантируем результат, который превзойдёт ожидания.",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative py-32 bg-[#fafafa] border-t border-gray-200 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* === Заголовок === */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center text-5xl font-serif font-semibold mb-24 tracking-tight text-gray-900"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Процесс <span className="italic text-red-600">организации</span>
                </motion.h2>

                {/* === Контент === */}
                <div className="relative grid md:grid-cols-5 gap-12 md:gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center md:text-left"
                        >
                            {/* Круг + иконка */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-50 to-white shadow-inner mb-6">
                                {step.icon}
                            </div>

                            {/* Линия-нить между шагами */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[calc(50%+3.5rem)] w-[120%] h-[1.5px] bg-gradient-to-r from-red-200/50 via-red-300/30 to-transparent" />
                            )}

                            {/* Текст */}
                            <h3
                                className="text-[20px] font-medium text-gray-900 mb-3"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[260px]">
                                {step.desc}
                            </p>

                            {/* Номер шага */}
                            <span className="absolute -bottom-10 text-[110px] font-serif text-gray-200/60 select-none pointer-events-none leading-none">
                                {idx + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Фоновый мягкий градиент снизу */}
            <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-white via-transparent to-transparent" />
        </section>
    );
}
