"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type EventT = {
    id: number;
    slug: string;
    title: string;
    subtitle?: string | null;
    coverImage?: string | null;
    brief?: string | null;
    concept?: string | null;
    realization?: string | null;
    result?: string | null;
    testimonial?: string | null;
    gallery?: string[] | null;
};

export default function CategoryEvents({
    category,
    initialOpenSlug,
}: {
    category: { slug: string; name: string; events: EventT[] };
    initialOpenSlug: string | null;
}) {
    const [openSlug, setOpenSlug] = useState<string | null>(initialOpenSlug);
    const refs = useRef<Record<string, HTMLDivElement | null>>({});

    // Скроллим к открытому кейсу при переходе из ссылки (?event=)
    useEffect(() => {
        if (initialOpenSlug && refs.current[initialOpenSlug]) {
            setTimeout(() => {
                refs.current[initialOpenSlug]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 150);
        }
    }, [initialOpenSlug]);

    const events = useMemo(() => category.events || [], [category.events]);

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <div className="space-y-14">
                {events.map((ev, idx) => {
                    const isOpen = openSlug === ev.slug;
                    const reverse = idx % 2 === 1;

                    return (
                        <div
                            key={ev.id}
                            ref={(el) => (refs.current[ev.slug] = el)}
                            className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500"
                        >
                            {/* === КАРТОЧКА В ЗАКРЫТОМ СОСТОЯНИИ === */}
                            <button
                                onClick={() => setOpenSlug(isOpen ? null : ev.slug)}
                                className={`w-full grid md:grid-cols-2 gap-8 items-center text-left group transition-all duration-500 hover:bg-gray-50 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                                    }`}
                            >
                                {/* Фото превью */}
                                <div className="relative h-72 md:h-80 w-full overflow-hidden">
                                    <Image
                                        src={ev.coverImage || "/images/placeholder.jpg"}
                                        alt={ev.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                        unoptimized
                                    />
                                </div>

                                {/* Текстовое описание */}
                                <div className="px-6 md:px-10 py-8">
                                    <h3
                                        className="text-3xl md:text-[32px] font-serif font-semibold mb-3 text-gray-900"
                                        style={{ fontFamily: '"Playfair Display", serif' }}
                                    >
                                        {ev.title}
                                    </h3>
                                    {ev.subtitle && (
                                        <p className="text-gray-500 mb-3">{ev.subtitle}</p>
                                    )}
                                    <p className="text-gray-700 text-[15px] leading-relaxed">
                                        {ev.brief}
                                    </p>

                                    <div className="mt-5 text-[15px] font-medium text-red-600">
                                        {isOpen ? "Свернуть ▲" : "Подробнее ▼"}
                                    </div>
                                </div>
                            </button>

                            {/* === РАСКРЫТЫЙ БЛОК === */}
                            {isOpen && (
                                <div className="px-6 md:px-10 pb-12 pt-4 animate-fadeIn">
                                    {/* Галерея */}
                                    {ev.gallery && ev.gallery.length > 0 && (
                                        <div className="flex flex-wrap gap-4 mb-10 justify-center">
                                            {ev.gallery.map((src, i) => (
                                                <div
                                                    key={i}
                                                    className="relative w-[30%] aspect-[4/3] min-w-[250px] rounded-xl overflow-hidden shadow-md"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`${ev.title} фото ${i + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-10 text-[15px] leading-relaxed text-gray-700">
                                        {ev.concept && (
                                            <div>
                                                <h4 className="font-semibold mb-2 text-gray-900">
                                                    Концепция
                                                </h4>
                                                <p>{ev.concept}</p>
                                            </div>
                                        )}
                                        {ev.realization && (
                                            <div>
                                                <h4 className="font-semibold mb-2 text-gray-900">
                                                    Реализация
                                                </h4>
                                                <p>{ev.realization}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Итоговый результат */}
                                    {ev.result && (
                                        <div className="mt-6 text-gray-600 italic border-l-4 border-red-500 pl-4">
                                            {ev.result}
                                        </div>
                                    )}

                                    {/* Отзыв клиента */}
                                    {ev.testimonial && (
                                        <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
                                            <p className="text-gray-700 italic leading-relaxed">
                                                “{ev.testimonial}”
                                            </p>
                                        </div>
                                    )}

                                    {/* Ссылка на кейс */}
                                    <div className="mt-6">
                                        <Link
                                            href={`/category/${category.slug}?event=${ev.slug}`}
                                            className="text-sm text-gray-500 hover:text-black transition underline underline-offset-4"
                                        >
                                            Ссылка на этот кейс →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
