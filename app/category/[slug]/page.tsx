import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { motion } from "framer-motion";
import CategoryEvents from "../../components/CategoryEvents";
import HeroSection from "./HeroSection";

const prisma = new PrismaClient();
export const revalidate = 60;

export default async function CategoryPage(props: any) {
    const params = await props.params;
    const searchParams = await props.searchParams;

    const slug = params?.slug as string | undefined;
    const eventSlug = (searchParams?.event as string) || null;

    if (!slug)
        return <div className="py-32 text-center text-gray-500">Нет slug</div>;

    const category = await prisma.category.findUnique({
        where: { slug },
        include: {
            events: {
                where: { status: "PUBLISHED" },
                orderBy: { order: "asc" },
            },
        },
    });

    if (!category)
        return (
            <div className="py-32 text-center text-gray-500">
                Категория не найдена
            </div>
        );

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
            <HeroSection category={category} />


            {/* === Кейсы === */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <CategoryEvents category={category} initialOpenSlug={eventSlug} />
                </div>
            </section>
        </main>
    );
}
