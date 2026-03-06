'use client';

import { deputadoElections } from '@/lib/municipalityData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const deputadoData = [
  { year: '2010', votos: 4672, cargo: 'Estadual' },
  { year: '2014', votos: 5529, cargo: 'Estadual' },
  { year: '2018', votos: 5149, cargo: 'Federal' },
  { year: '2022', votos: 2385, cargo: 'Estadual' },
];

export default function Deputado() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Candidaturas a Deputado</h1>
        <p className="text-slate-500 mt-1 text-sm">Análise de candidaturas para Deputado Estadual e Federal</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Candidaturas', value: '4', sub: '2010, 2014, 2018, 2022' },
          { label: 'Total de Votos', value: '17.735', sub: 'Todas as candidaturas' },
          { label: 'Média por Eleição', value: '4.434', sub: 'Votos por candidatura' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500 mb-1">{s.label}</p>
            <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{s.value}</p>
            <p className="text-[11px] text-slate-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Evolução de Votos</h2>
        <p className="text-xs text-slate-500 mb-4">Histórico de votação para Deputado</p>
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={deputadoData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={45} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px' }} formatter={(v: number) => [v.toLocaleString('pt-BR'), 'Votos']} />
              <Line type="monotone" dataKey="votos" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: '#2563eb', r: 4, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Candidaturas Detalhadas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ano</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cargo</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Partido</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Votos</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Região</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {deputadoElections.map((e, idx) => (
                <tr key={e.year} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}>
                  <td className="px-5 py-3 font-semibold text-blue-600">{e.year}</td>
                  <td className="px-5 py-3 text-slate-700">{e.position}</td>
                  <td className="px-5 py-3 text-slate-700">{e.party}</td>
                  <td className="px-5 py-3 text-right font-semibold text-slate-900">{e.totalVotes.toLocaleString('pt-BR')}</td>
                  <td className="px-5 py-3 text-slate-600">{e.region}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-medium">Suplente</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-xl border border-blue-100 p-5">
          <h3 className="text-base font-semibold text-blue-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Melhor Desempenho</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-blue-700">Ano</span><span className="font-semibold text-blue-900">2014</span></div>
            <div className="flex justify-between"><span className="text-blue-700">Cargo</span><span className="font-semibold text-blue-900">Dep. Estadual</span></div>
            <div className="flex justify-between"><span className="text-blue-700">Votos</span><span className="font-bold text-blue-900 text-lg">5.529</span></div>
          </div>
        </div>
        <div className="bg-amber-50 rounded-xl border border-amber-100 p-5">
          <h3 className="text-base font-semibold text-amber-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Meta 2026</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-amber-700">Cargo</span><span className="font-semibold text-amber-900">Dep. Estadual</span></div>
            <div className="flex justify-between"><span className="text-amber-700">Meta</span><span className="font-bold text-amber-900 text-lg">6.500+</span></div>
            <div className="flex justify-between"><span className="text-amber-700">Crescimento</span><span className="font-semibold text-amber-900">+17,5%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
