'use client';

import { Users, Heart, TrendingUp } from 'lucide-react';

export default function Supporters() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Apoiadores</h1>
        <p className="text-slate-500 mt-1 text-sm">Análise de engajamento e perfil de apoiadores</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Apoiadores Ativos', value: '2.847', sub: 'Últimos 6 meses', icon: Users, color: 'bg-blue-500' },
          { label: 'Engajamento', value: '34,2%', sub: 'Interações/Seguidores', icon: Heart, color: 'bg-rose-500' },
          { label: 'Crescimento', value: '+8,5%', sub: 'Média mensal', icon: TrendingUp, color: 'bg-emerald-500' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
              <div className={`w-10 h-10 ${s.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon size={20} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 mb-1">{s.label}</p>
              <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{s.value}</p>
              <p className="text-[11px] text-slate-400 mt-1">{s.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Supporter Types */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Tipos de Apoiadores</h2>
        <p className="text-xs text-slate-500 mb-4">Segmentação da base de apoio</p>
        <div className="space-y-4">
          {[
            { type: 'Apoiadores Frequentes', count: 1200, pct: 42, color: 'bg-blue-500' },
            { type: 'Apoiadores Ocasionais', count: 980, pct: 34, color: 'bg-violet-500' },
            { type: 'Apoiadores Potenciais', count: 667, pct: 24, color: 'bg-amber-500' },
          ].map((item) => (
            <div key={item.type}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-slate-700">{item.type}</span>
                <span className="text-sm font-semibold text-slate-900">{item.count.toLocaleString('pt-BR')} ({item.pct}%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Atividade Semanal</h2>
        <p className="text-xs text-slate-500 mb-4">Padrão de engajamento por dia</p>
        <div className="grid grid-cols-7 gap-3">
          {[
            { day: 'Seg', val: 60 },
            { day: 'Ter', val: 75 },
            { day: 'Qua', val: 85 },
            { day: 'Qui', val: 90 },
            { day: 'Sex', val: 95 },
            { day: 'Sáb', val: 70 },
            { day: 'Dom', val: 50 },
          ].map((d) => (
            <div key={d.day} className="text-center">
              <p className="text-[11px] text-slate-500 mb-2">{d.day}</p>
              <div className="w-full bg-slate-100 rounded-lg overflow-hidden" style={{ height: 120 }}>
                <div className="w-full flex items-end justify-center h-full">
                  <div className="w-full bg-blue-500 rounded-t-md" style={{ height: `${d.val}%` }} />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">{d.val}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Supporters */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Principais Apoiadores</h2>
        <div className="space-y-3">
          {['João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 'Carlos Mendes'].map((name, idx) => (
            <div key={name} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <span className="text-sm font-medium text-slate-800">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
