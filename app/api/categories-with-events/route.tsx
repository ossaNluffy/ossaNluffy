import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { order: "asc" },
            include: {
                events: {
                    where: { status: "PUBLISHED" },
                    orderBy: { createdAt: "desc" },
                },
            },
        });

        return NextResponse.json(categories);
    } catch (err) {
        console.error("Ошибка при получении категорий с ивентами:", err);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}
