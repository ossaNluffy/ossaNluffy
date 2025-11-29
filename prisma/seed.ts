import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Сидинг категорий и ивентов...");

  // === КАТЕГОРИИ ===
  const categories = [
    {
      name: "Технический продакшн",
      slug: "tech-production",
      shortDesc: "Свет, звук, сцена, мультимедиа и трансляции под ключ.",
      longDesc:
        "Технический продакшн — это комплексное обеспечение мероприятий профессиональным оборудованием и специалистами. Мы создаём сцену, световую архитектуру, концертное и конференционное озвучивание, LED-экраны и онлайн-трансляции любого масштаба. От замысла и схемы подключения до финальной настройки — полный контроль технической части под ключ.",
      coverImage: "/images/categories/k8.png",
    },
    {
      name: "Видео продакшн",
      slug: "video-production",
      shortDesc: "Съёмка, режиссура, монтаж и постпродакшн для ивентов.",
      longDesc:
        "Видео продакшн включает разработку креативной концепции, съёмку и постобработку видеоконтента для мероприятий. Мы создаём имиджевые ролики, aftermovie, live-трансляции, тизеры и корпоративные фильмы. Работаем с многокамерной съёмкой, дронами, графикой и профессиональным звуком — чтобы каждый кадр передавал атмосферу события.",
      coverImage: "/images/categories/k9.png",
    },
    {
      name: "Организационные работы",
      slug: "organization",
      shortDesc: "Полный цикл подготовки и проведения мероприятий.",
      longDesc:
        "Организационные работы — это стратегическое планирование, подбор площадок и подрядчиков, разработка сценария и координация всех процессов на площадке. Мы берём на себя коммуникацию, тайминг, логистику, аккредитацию и контроль исполнения. Клиент получает готовое мероприятие, где всё — от идеи до аплодисментов — отработано безупречно.",
      coverImage: "/images/categories/k10.png",
    },
  ];

  for (let i = 0; i < categories.length; i++) {
    const c = categories[i];
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {
        name: c.name,
        shortDesc: c.shortDesc,
        longDesc: c.longDesc,
        coverImage: c.coverImage,
        order: i,
        isFeatured: true,
        metaTitle: `${c.name} — Event Bureau`,
        metaDescription: c.shortDesc,
      },
      create: {
        ...c,
        order: i,
        isFeatured: true,
        metaTitle: `${c.name} — Event Bureau`,
        metaDescription: c.shortDesc,
      },
    });
  }

  console.log("✅ Категории добавлены");

  const dbCategories = await prisma.category.findMany();

  // === ИВЕНТЫ ===
  const eventsData = [
    // ============================
    // 🟠 ТЕХНИЧЕСКИЙ ПРОДАКШН
    // ============================
    {
      slug: "tech-light-show",
      title: "Световое шоу на открытии форума",
      subtitle: "Комбинация света, дыма и LED-экрана",
      coverImage: "/images/events/tech1.jpg",
      brief:
        "Техническое сопровождение делового форума — полный свет, звук и трансляция.",
      concept:
        "Управление через GrandMA, 36 световых приборов, LED-панель 20 м².",
      gallery: ["/images/events/tech1-1.jpg", "/images/events/tech1-2.jpg", "/images/events/tech1-3.jpg"],
      categorySlug: "tech-production",
    },
    {
      slug: "tech-sound-system",
      title: "Концертная акустика для open-air",
      subtitle: "Чистый звук на 5000 гостей",
      coverImage: "/images/events/tech2.jpg",
      brief: "Прокат и настройка аудиосистемы L-Acoustics для фестиваля.",
      concept: "Front-fill, delay-линии, мониторинг сцены, live-mix.",
      gallery: ["/images/events/tech2-1.jpg", "/images/events/tech2-2.jpg"],
      categorySlug: "tech-production",
    },
    {
      slug: "tech-live-stream",
      title: "Онлайн-трансляция бизнес-конференции",
      subtitle: "Три камеры, режиссёрская, синхронизация со сценой",
      coverImage: "/images/events/tech3.jpg",
      brief:
        "Прямая трансляция с интерактивной графикой, слайд-шоу и звуком конференции.",
      concept:
        "Обеспечена онлайн-передача на YouTube и сайт клиента, задержка не более 2 секунд.",
      gallery: ["/images/events/tech3-1.jpg", "/images/events/tech3-2.jpg"],
      categorySlug: "tech-production",
    },

    // ============================
    // 🔴 ВИДЕО ПРОДАКШН
    // ============================
    {
      slug: "video-corporate-film",
      title: "Корпоративный фильм о компании",
      subtitle: "Премиум-формат для внутреннего бренда",
      coverImage: "/images/events/video1.jpg",
      brief: "Съёмка в трёх локациях, интервью руководителей, дрон-видео.",
      concept:
        "FullHD продакшн, фирменная заставка, цветокор и субтитры, продуманная режиссура.",
      gallery: ["/images/events/video1-1.jpg", "/images/events/video1-2.jpg"],
      categorySlug: "video-production",
    },
    {
      slug: "video-event-after",
      title: "Aftermovie бизнес-форума",
      subtitle: "Динамичный монтаж и эмоции участников",
      coverImage: "/images/events/video2.jpg",
      brief: "Короткий ролик о прошедшем мероприятии для соцсетей.",
      concept: "Съёмка 4 камеры, slow-mo, авторская музыка.",
      gallery: ["/images/events/video2-1.jpg", "/images/events/video2-2.jpg"],
      categorySlug: "video-production",
    },
    {
      slug: "video-brand-clip",
      title: "Рекламный ролик для бренда одежды",
      subtitle: "Кинематографический стиль и внимание к деталям",
      coverImage: "/images/events/video3.jpg",
      brief:
        "Имиджевый видеоролик для fashion-бренда — акцент на движении и эмоциях.",
      concept:
        "Съёмка RED Komodo, постановочный свет, студийный саунд-дизайн.",
      gallery: ["/images/events/video3-1.jpg", "/images/events/video3-2.jpg"],
      categorySlug: "video-production",
    },

    // ============================
    // 🔵 ОРГАНИЗАЦИОННЫЕ РАБОТЫ
    // ============================
    {
      slug: "org-conference",
      title: "Организация конференции",
      subtitle: "От заявки до аплодисментов",
      coverImage: "/images/events/org1.jpg",
      brief: "Полное сопровождение делового мероприятия под ключ.",
      concept: "Регистрация участников, площадка, кейтеринг, тайминг, ведущий.",
      gallery: ["/images/events/org1-1.jpg", "/images/events/org1-2.jpg"],
      categorySlug: "organization",
    },
    {
      slug: "org-opening",
      title: "Открытие филиала компании",
      subtitle: "Презентация, шоу и PR-эффект",
      coverImage: "/images/events/org2.jpg",
      brief: "Организация официального открытия для партнёров и прессы.",
      concept:
        "Редактируемый сценарий, подбор подрядчиков, брендинг площадки, PR-сопровождение.",
      gallery: ["/images/events/org2-1.jpg", "/images/events/org2-2.jpg"],
      categorySlug: "organization",
    },
    {
      slug: "org-summer-festival",
      title: "Летний корпоративный фестиваль",
      subtitle: "Квесты, сцена, интерактивы и вечерний open-air",
      coverImage: "/images/events/org3.jpg",
      brief: "Планирование, координация и реализация летнего фестиваля.",
      concept:
        "Разработка концепции, логистика, зоны активности, шоу-программа и вечерний концерт.",
      gallery: ["/images/events/org3-1.jpg", "/images/events/org3-2.jpg"],
      categorySlug: "organization",
    },
  ];

  for (const e of eventsData) {
    const cat = dbCategories.find((c) => c.slug === e.categorySlug);
    if (!cat) continue;

    await prisma.event.upsert({
      where: { slug: e.slug },
      update: {
        title: e.title,
        subtitle: e.subtitle,
        coverImage: e.coverImage,
        brief: e.brief,
        concept: e.concept,
        gallery: e.gallery,
        status: "PUBLISHED",
        categoryId: cat.id,
        isFeatured: true,
      },
      create: {
        slug: e.slug,
        title: e.title,
        subtitle: e.subtitle,
        coverImage: e.coverImage,
        brief: e.brief,
        concept: e.concept,
        gallery: e.gallery,
        status: "PUBLISHED",
        categoryId: cat.id,
        isFeatured: true,
      },
    });
  }

  console.log("✅ Все ивенты добавлены!");
  console.log("🎉 Сидинг завершён!");
}

main()
  .catch((e) => {
    console.error("❌ Ошибка при сидировании:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
