'use client';

import { municipalityElectionData } from '@/lib/municipalityData';

export default function Projection() {
  const totalVotes2022 = 2385;
  const totalVotes2018 = municipalityElectionData.reduce((sum, m) => sum + (m.votes2018 || 0), 0);
  const sorted = municipalityElectionData.filter(m => m.votes2018).sort((a, b) => (b.votes2018 || 0) - (a.votes2018 || 0));

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Projeção</h1>
        <p className="text-slate-500 mt-1 text-sm">Dados por município de todas as candidaturas</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs text-slate-500 mb-1">Total de Votos 2018</p>
          <p className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{totalVotes2018.toLocaleString('pt-BR')}</p>
          <p className="text-[11px] text-slate-400 mt-1">Distribuídos em 22 municípios</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs text-slate-500 mb-1">Total de Votos 2022</p>
          <p className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{totalVotes2022.toLocaleString('pt-BR')}</p>
          <p className="text-[11px] text-slate-400 mt-1">Deputado Estadual</p>
        </div>
      </div>

      {/* Visual bars */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Distribuição por Município</h2>
        <p className="text-xs text-slate-500 mb-4">Percentual de votos – Eleição 2018</p>
        <div className="space-y-3">
          {sorted.slice(0, 10).map((m) => {
            const pct = ((m.votes2018 || 0) / totalVotes2018 * 100);
            return (
              <div key={m.municipality}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-700">{m.municipality}</span>
                  <span className="text-xs font-semibold text-slate-900">{m.votes2018?.toLocaleString('pt-BR')} ({pct.toFixed(1)}%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Tabela Completa</h2>
          <p className="text-xs text-slate-500 mt-0.5">Todos os municípios com votação</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Município</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Região</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Votos</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">%</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((m, idx) => (
                <tr key={m.municipality} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}>
                  <td className="px-5 py-3 font-medium text-slate-800">{m.municipality}</td>
                  <td className="px-5 py-3 text-slate-600">{m.region}</td>
                  <td className="px-5 py-3 text-right font-semibold text-slate-900">{m.votes2018?.toLocaleString('pt-BR')}</td>
                  <td className="px-5 py-3 text-right text-slate-600">{((m.votes2018 || 0) / totalVotes2018 * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
