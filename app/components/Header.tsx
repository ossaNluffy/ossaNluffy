"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "Главная" },
        { href: "/#works", label: "Работы" },
        { href: "/#about", label: "О нас" },
        { href: "/#process", label: "Процесс" },
        { href: "/#contact", label: "Контакты" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-white/90 shadow-md backdrop-blur-md text-gray-900"
                : "bg-black/30 backdrop-blur-sm text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* === ЛОГО === */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight transition-colors"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    <span className="text-red-600">АС</span>Департамент
                </Link>

                {/* === ДЕСКТОП МЕНЮ === */}
                <nav className="hidden md:flex gap-8 font-medium transition-colors">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-red-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* === МОБИЛЬНОЕ МЕНЮ === */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* === ВЫПАДАЮЩЕЕ МЕНЮ === */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-100">
                    <nav className="flex flex-col px-6 py-4 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-800 hover:text-red-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
