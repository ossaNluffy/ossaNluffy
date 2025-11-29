import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    try {
        const event = await prisma.event.findUnique({
            where: { slug: params.slug },
            include: { category: true },
        });

        if (!event) {
            return NextResponse.json({ error: "Ивент не найден" }, { status: 404 });
        }

        return NextResponse.json(event);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Ошибка при получении ивента" }, { status: 500 });
    }
}
