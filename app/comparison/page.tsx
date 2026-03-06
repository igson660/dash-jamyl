'use client';

export default function Comparison() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Comparativo 2022</h1>
        <p className="text-slate-500 mt-1 text-sm">Análise comparativa – Deputado Estadual 2022 vs 2026</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Votos 2022', value: '2.385', sub: 'Deputado Estadual', accent: 'border-l-blue-500' },
          { label: 'Votos 2024', value: '1.880', sub: '-21,2% (Vereador)', accent: 'border-l-red-500' },
          { label: 'Mínimo p/ Eleição', value: '5.386', sub: '24º colocado 2022', accent: 'border-l-amber-500' },
          { label: 'Gap p/ Eleição', value: '3.001', sub: 'Votos necessários', accent: 'border-l-emerald-500' },
        ].map((s, i) => (
          <div key={i} className={`bg-white rounded-xl border border-slate-200 border-l-4 ${s.accent} p-4`}>
            <p className="text-xs text-slate-500 mb-1">{s.label}</p>
            <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{s.value}</p>
            <p className="text-[11px] text-slate-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Scenarios */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Cenários de Crescimento 2026</h2>
        <p className="text-xs text-slate-500 mb-4">Projeções baseadas no histórico eleitoral</p>
        <div className="space-y-4">
          {[
            { name: 'Conservadora', votes: 3500, growth: 47, color: 'bg-amber-500' },
            { name: 'Realista', votes: 4200, growth: 76, color: 'bg-blue-500' },
            { name: 'Otimista', votes: 5500, growth: 131, color: 'bg-emerald-500' },
          ].map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-slate-700">{s.name}</span>
                <span className="text-sm font-semibold text-slate-900">{s.votes.toLocaleString('pt-BR')} votos (+{s.growth}%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${Math.min((s.votes / 5386) * 100, 100)}%` }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-slate-400">Meta: 5.386 votos</span>
                <span className="text-[10px] text-slate-400">{((s.votes / 5386) * 100).toFixed(0)}% da meta</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Analysis */}
      <div className="bg-blue-50 rounded-xl border border-blue-100 p-5">
        <h3 className="text-base font-semibold text-blue-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Análise Estratégica</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p>Para ser eleito Deputado Estadual em 2026, Jamyl precisa de aproximadamente <strong>5.386 votos</strong> (base do 24º colocado em 2022).</p>
          <p>Considerando seus <strong>2.385 votos</strong> em 2022, é necessário um crescimento de <strong>+125,8%</strong> para atingir a meta.</p>
          <p>A recuperação de +24,6% entre 2020 e 2024 demonstra tendência positiva, mas será necessário intensificar significativamente a campanha.</p>
        </div>
      </div>
    </div>
  );
}
