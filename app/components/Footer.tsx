import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0d0d0d] text-gray-300 py-20 border-t border-gray-800 overflow-hidden">
            {/* Световые пятна */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.1),transparent_70%)] blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,0,0.1),transparent_70%)] blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14">
                {/* Лого и описание */}
                <div>
                    <h2
                        className="text-3xl font-extrabold mb-4"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        <span className="text-red-600">АС</span>Департамент
                    </h2>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                        Создаём события, которые вдохновляют, объединяют и остаются в памяти.
                    </p>
                </div>

                {/* Навигация */}
                <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">Навигация</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href="/" className="hover:text-red-500 transition">
                            Главная
                        </Link>
                        <Link href="/#works" className="hover:text-red-500 transition">
                            Работы
                        </Link>
                        <Link href="/#about" className="hover:text-red-500 transition">
                            О нас
                        </Link>
                        <Link href="/#process" className="hover:text-red-500 transition">
                            Процесс
                        </Link>
                        <Link href="/#contact" className="hover:text-red-500 transition">
                            Контакты
                        </Link>
                    </div>
                </div>

                {/* Контакты */}
                <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">Контакты</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-red-500" />
                            <a href="tel:+79998887766" className="hover:text-white transition">
                                +7&nbsp;(999)&nbsp;888-77-66
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-red-500" />
                            <a
                                href="mailto:info@event-bureau.ru"
                                className="hover:text-white transition"
                            >
                                info@event-bureau.ru
                            </a>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <Instagram className="w-5 h-5 text-red-500" />
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="hover:text-white transition"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Нижняя линия */}
            <div className="border-t border-gray-800 mt-14 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()}   <span className="text-red-600">АС</span>Департамент — Все права защищены.
            </div>
        </footer>
    );
}
