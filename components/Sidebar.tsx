"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  BarChart3,
  MapPin,
  TrendingUp,
  Users,
  Menu,
  X,
  ChevronDown,
  Target,
  Landmark,
} from "lucide-react";

const navItems = [{ href: "/", label: "Dashboard", icon: Home }];

const analysisItems = [
  { href: "/perfil", label: "1. Perfil Eleitoral", icon: Users },
  { href: "/regional", label: "2. Análise Regional", icon: MapPin },
  { href: "/growth", label: "3. Crescimento", icon: TrendingUp },
  { href: "/desempenho", label: "4. Desempenho", icon: BarChart3 },
  { href: "/deputado", label: "5. Análise Deputado", icon: Landmark },
  { href: "/projection", label: "6. Projeção", icon: Target },
  { href: "/poder-politico", label: "13. Poder Político", icon: Landmark },
  {
    href: "/influencia-eleitoral",
    label: "14. Influência Eleitoral",
    icon: MapPin,
  },
  { href: "/base-potencial", label: "15. Base Potencial", icon: Users },
  {
    href: "/simulacao-deputado",
    label: "16. Simulação Deputado",
    icon: BarChart3,
  },
  { href: "/expansao-territorial", label: "17. Expansão", icon: TrendingUp },
  {
    href: "/crescimento-territorial",
    label: "18. Crescimento Territorial",
    icon: TrendingUp,
  },
  { href: "/viabilidade", label: "19. Viabilidade", icon: Target },
  { href: "/cenarios-2026", label: "20. Cenários 2026", icon: Landmark },
  {
    href: "/riscos-reputacionais",
    label: "21. Riscos reputação",
    icon: Landmark,
  },
  { href: "/diretrizes-campanha", label: "22. Diretrizes", icon: Users },
  { href: "/2022", label: "23. Desempenho 2022", icon: BarChart3 },
  { href: "/2018", label: "23. Desempenho 2018", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showSpecialized, setShowSpecialized] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 left-3 z-50 lg:hidden w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-200"
      >
        {isOpen ? (
          <X size={20} className="text-slate-700" />
        ) : (
          <Menu size={20} className="text-slate-700" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-100">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span
              className="text-white font-bold text-sm"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              JA
            </span>
          </div>
          <div className="min-w-0">
            <p
              className="text-sm font-bold text-slate-900 truncate"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Jamyl Asfury
            </p>
            <p className="text-xs text-slate-400">Campanha 2026</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 mb-2">
            Principal
          </p>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      active
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={active ? "text-blue-600" : "text-slate-400"}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Analysis Sections */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => setShowSpecialized(!showSpecialized)}
              className="flex items-center justify-between w-full px-3 mb-2"
            >
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Análises Técnicas
              </span>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform ${showSpecialized ? "rotate-180" : ""}`}
              />
            </button>
            {showSpecialized && (
              <ul className="space-y-0.5">
                {analysisItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-amber-50 text-amber-700 font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            active ? "text-amber-600" : "text-slate-400"
                          }
                        />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs font-semibold text-blue-600 text-center">
            Deputado Estadual 2026
          </p>
          <p className="text-[10px] text-slate-400 text-center mt-0.5">Acre</p>
        </div>
      </aside>
    </>
  );
}
