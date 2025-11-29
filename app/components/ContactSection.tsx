"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative py-32 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-no-repeat text-white"
        >
            {/* затемнение */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* === ЛЕВАЯ ЧАСТЬ === */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight tracking-tight"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        Свяжитесь с&nbsp;<span className="italic text-red-500">нами</span>
                    </h2>

                    <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-md font-light">
                        Расскажите о своём проекте — мы подготовим концепцию и смету
                        в течение 24&nbsp;часов.
                    </p>

                    <div className="space-y-4 text-gray-200 font-light">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <a
                                href="tel:+79998887766"
                                className="hover:text-white transition"
                            >
                                +7&nbsp;(999)&nbsp;888-77-66
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <a
                                href="mailto:info@event-bureau.ru"
                                className="hover:text-white transition"
                            >
                                info@event-bureau.ru
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span>Москва, ул. Арбат, 25</span>
                        </div>
                    </div>

                    {/* Соцсети */}
                    <div className="flex gap-6 mt-10">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            className="text-gray-300 hover:text-red-400 transition"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                {/* === ФОРМА === */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("✅ Заявка отправлена!");
                    }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20 space-y-6"
                >
                    <h3
                        className="text-2xl font-semibold text-center mb-6"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        Оставьте заявку
                    </h3>

                    <div className="space-y-5">
                        <input
                            type="text"
                            required
                            placeholder="Ваше имя"
                            className="w-full rounded-xl px-5 py-3 bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 transition outline-none"
                        />
                        <input
                            type="tel"
                            required
                            placeholder="Телефон"
                            className="w-full rounded-xl px-5 py-3 bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 transition outline-none"
                        />
                        <textarea
                            placeholder="Расскажите о проекте..."
                            rows={4}
                            className="w-full rounded-xl px-5 py-3 bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 transition outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl py-3 transition-all shadow-lg hover:shadow-red-700/20"
                    >
                        <Send className="w-5 h-5" />
                        Отправить заявку
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
