import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";





export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { order: "asc" },
            select: {
                id: true,
                name: true,
                slug: true,
                shortDesc: true,
                coverImage: true,
            },
        });

        return NextResponse.json(categories);
    } catch (err) {
        console.error("Ошибка при получении категорий:", err);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}
