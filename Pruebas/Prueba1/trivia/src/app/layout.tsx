import "./globals.css";
import TriviaProvider from "./providers/TriviaProvider";
import Header from "./components/Header";

export const metadata = {
  title: "Trivia App",
  description: "Aplicación de trivia con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <TriviaProvider>
          <Header />
          {children}
        </TriviaProvider>
      </body>
    </html>
  );
}


