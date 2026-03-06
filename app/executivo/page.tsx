'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const executiveData = [
  { year: '2020', votos: 1509, cargo: 'Prefeito' },
  { year: '2024', votos: 1880, cargo: 'Vereador' },
];

export default function Executivo() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Candidaturas Executivas</h1>
        <p className="text-slate-500 mt-1 text-sm">Análise de candidaturas para Prefeito e Vereador</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Candidaturas', value: '2', sub: 'Prefeito + Vereador' },
          { label: 'Total de Votos', value: '3.389', sub: 'Todas as candidaturas' },
          { label: 'Média por Eleição', value: '1.695', sub: 'Votos por candidatura' },
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
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Comparativo de Votos</h2>
        <p className="text-xs text-slate-500 mb-4">Prefeito (2020) vs Vereador (2024)</p>
        <div style={{ height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={executiveData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={45} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px' }} formatter={(v: number) => [v.toLocaleString('pt-BR'), 'Votos']} />
              <Bar dataKey="votos" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Prefeito */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-blue-50">
          <h2 className="text-base font-semibold text-blue-900" style={{ fontFamily: "'Sora', sans-serif" }}>Candidatura a Prefeito</h2>
          <p className="text-xs text-blue-700 mt-0.5">Eleição Municipal 2020</p>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Ano', value: '2020' },
              { label: 'Cargo', value: 'Prefeito' },
              { label: 'Partido', value: 'PSDB' },
              { label: 'Votos', value: '1.509' },
            ].map((item) => (
              <div key={item.label} className="border border-slate-200 rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                <p className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg">
            <p className="text-xs text-red-800"><strong>Status:</strong> Não eleito – Rio Branco elegeu 1 prefeito em 2020</p>
          </div>
        </div>
      </div>

      {/* Vereador */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-emerald-50">
          <h2 className="text-base font-semibold text-emerald-900" style={{ fontFamily: "'Sora', sans-serif" }}>Candidatura a Vereador</h2>
          <p className="text-xs text-emerald-700 mt-0.5">Eleição Municipal 2024</p>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Ano', value: '2024' },
              { label: 'Cargo', value: 'Vereador' },
              { label: 'Partido', value: 'PL' },
              { label: 'Votos', value: '1.880' },
            ].map((item) => (
              <div key={item.label} className="border border-slate-200 rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                <p className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
            <p className="text-xs text-amber-800"><strong>Status:</strong> 4º Suplente – Rio Branco elegeu 11 vereadores em 2024</p>
          </div>
        </div>
      </div>

      {/* Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-xl border border-red-100 p-5">
          <h3 className="text-base font-semibold text-red-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Desafios</h3>
          <ul className="space-y-2 text-sm text-red-800">
            <li>• <strong>Queda em 2020:</strong> -67,2% de votos (Dep. → Prefeito)</li>
            <li>• <strong>Recuperação parcial:</strong> +24,6% em 2024</li>
            <li>• <strong>Foco necessário:</strong> Reconstruir base eleitoral</li>
          </ul>
        </div>
        <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-5">
          <h3 className="text-base font-semibold text-emerald-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Oportunidades</h3>
          <ul className="space-y-2 text-sm text-emerald-800">
            <li>✓ <strong>Crescimento 2024:</strong> Recuperação de votos</li>
            <li>✓ <strong>Novo partido:</strong> Mudança para PL pode ampliar base</li>
            <li>✓ <strong>Potencial 2026:</strong> Retorno como Dep. Estadual</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
