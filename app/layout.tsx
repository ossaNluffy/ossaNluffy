import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Event Bureau",
  description: "Организация мероприятий под ключ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-900">
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
