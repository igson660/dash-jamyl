'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from 'lucide-react';

const growthData = [
  { year: '2010', votos: 4672 },
  { year: '2014', votos: 5529 },
  { year: '2018', votos: 5149 },
  { year: '2020', votos: 1509 },
  { year: '2022', votos: 2385 },
  { year: '2024', votos: 1880 },
];

const periods = [
  { label: '2010 → 2014', pct: '+18,3%', detail: '4.672 → 5.529', positive: true },
  { label: '2014 → 2018', pct: '-6,9%', detail: '5.529 → 5.149', positive: false },
  { label: '2018 → 2020', pct: '-70,7%', detail: '5.149 → 1.509', positive: false },
  { label: '2020 → 2022', pct: '+58,1%', detail: '1.509 → 2.385', positive: true },
  { label: '2022 → 2024', pct: '-21,2%', detail: '2.385 → 1.880', positive: false },
];

export default function Growth() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Crescimento</h1>
        <p className="text-slate-500 mt-1 text-sm">Análise de tendências e evolução de votos</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Evolução de Votos</h2>
        <p className="text-xs text-slate-500 mb-4">Histórico completo 2010 – 2024</p>
        <div style={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={45} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px' }} formatter={(v: number) => [v.toLocaleString('pt-BR'), 'Votos']} />
              <Line type="monotone" dataKey="votos" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: '#2563eb', r: 4, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Growth by Period */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {periods.map((p, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500">{p.label}</p>
              {p.positive ? (
                <ArrowUpRight size={16} className="text-emerald-500" />
              ) : (
                <ArrowDownRight size={16} className="text-red-500" />
              )}
            </div>
            <p className={`text-2xl font-bold ${p.positive ? 'text-emerald-600' : 'text-red-600'}`} style={{ fontFamily: "'Sora', sans-serif" }}>
              {p.pct}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">{p.detail}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-xl border border-blue-100 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-blue-600 mb-1">Pico de Votação</p>
              <p className="text-3xl font-bold text-blue-700" style={{ fontFamily: "'Sora', sans-serif" }}>5.529</p>
              <p className="text-sm text-blue-600 mt-1">2014 – Deputado Estadual</p>
            </div>
            <TrendingUp size={24} className="text-blue-400" />
          </div>
        </div>

        <div className="bg-red-50 rounded-xl border border-red-100 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-red-600 mb-1">Menor Votação</p>
              <p className="text-3xl font-bold text-red-700" style={{ fontFamily: "'Sora', sans-serif" }}>1.509</p>
              <p className="text-sm text-red-600 mt-1">2020 – Prefeito</p>
            </div>
            <TrendingDown size={24} className="text-red-400" />
          </div>
        </div>
      </div>

      {/* Recovery */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Recuperação 2020 → 2024</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <p className="text-2xl font-bold text-emerald-700" style={{ fontFamily: "'Sora', sans-serif" }}>+24,6%</p>
            <p className="text-xs text-emerald-600 mt-1">Crescimento</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-700" style={{ fontFamily: "'Sora', sans-serif" }}>+371</p>
            <p className="text-xs text-blue-600 mt-1">Votos a mais</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <p className="text-2xl font-bold text-amber-700" style={{ fontFamily: "'Sora', sans-serif" }}>4º Sup.</p>
            <p className="text-xs text-amber-600 mt-1">Posição 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
