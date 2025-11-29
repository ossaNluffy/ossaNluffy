import OurWorks from "./OurWorks";

export default async function OurWorksServer() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/categories-with-events`, {
        next: { revalidate: 60 }, // кэшируем на 1 минуту
    });

    const categories = await res.json();

    return <OurWorks categories={categories} />;
}
