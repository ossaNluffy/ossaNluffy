import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const events = await prisma.event.findMany({
            orderBy: { createdAt: "desc" },
            include: { category: true },
        });

        return NextResponse.json(events);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Ошибка при получении ивентов" }, { status: 500 });
    }
}
