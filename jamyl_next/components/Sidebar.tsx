'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  BarChart3,
  MapPin,
  TrendingUp,
  Users,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/analytics', label: 'Análises', icon: BarChart3 },
  { href: '/regional', label: 'Regional', icon: MapPin },
  { href: '/growth', label: 'Crescimento', icon: TrendingUp },
  { href: '/supporters', label: 'Apoiadores', icon: Users },
  { href: '/projection', label: 'Projeção', icon: BarChart3 },
  { href: '/comparison', label: 'Comparativo', icon: TrendingUp },
];

const specializedItems = [
  { href: '/deputado', label: 'Candidaturas Deputado', icon: BarChart3 },
  { href: '/executivo', label: 'Candidaturas Executivas', icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showSpecialized, setShowSpecialized] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          style={{ backdropFilter: 'blur(4px)' }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-40 overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>JA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.125rem' }}>Jamyl</h1>
              <p className="text-xs text-gray-500 font-medium" style={{ color: '#6b7280' }}>Campanha 2026</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {/* Main Menu */}
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-3">
              Menu Principal
            </p>
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                      active
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={active ? 'text-blue-600' : 'text-gray-400'}
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Specialized Section */}
          <div className="border-t border-gray-100 pt-4">
            <button
              onClick={() => setShowSpecialized(!showSpecialized)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              <span>Análises Especializadas</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showSpecialized ? 'rotate-180' : ''}`}
              />
            </button>

            {showSpecialized && (
              <div className="mt-2 space-y-1">
                {specializedItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        active
                          ? 'bg-amber-50 text-amber-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon
                        size={20}
                        className={active ? 'text-amber-600' : 'text-gray-400'}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-4 bg-gray-50">
          <div className="text-center">
            <p className="text-xs font-bold text-blue-600">Deputado Estadual</p>
            <p className="text-xs text-gray-500 mt-1">Eleições 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}
