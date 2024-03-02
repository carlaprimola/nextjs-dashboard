//Layout es el que contiene todas las páginas

import { montserrat } from './ui/fonts'; //importamos la fuente
import '../app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
