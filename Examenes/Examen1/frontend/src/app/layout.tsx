import './globals.css'
import GastoProvider from './providers/GastoProviders'
// aqui envolvemos todo lo de la app
export const metadata = {
  title: 'Examen - Administrador de Gastos',
  description: 'Aplicacion para control de gastos personales',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {/* envolvemos toda la app con provider */}
        <GastoProvider>
          {children}
        </GastoProvider>
      </body>
    </html>
  )
}

