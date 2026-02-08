import './globals.css';
import { TemaProvider } from './context/TemaContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <TemaProvider>{children}</TemaProvider>
      </body>
    </html>
  );
}

