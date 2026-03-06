import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashboard Jamyl Asfury - Campanha 2026',
  description: 'Análise de dados eleitorais e trajetória política no Acre',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen">
        <Sidebar />
        <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
