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
      <body className="bg-slate-50 min-h-screen text-slate-800" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Sidebar />
        <div className="lg:pl-64 min-h-screen">
          <main className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
