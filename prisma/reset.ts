import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("🧹 Очистка базы данных...");

    // порядок важен, сначала ивенты (они зависят от категорий)
    await prisma.event.deleteMany({});
    await prisma.category.deleteMany({});

    console.log("✅ Все категории и ивенты удалены.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
