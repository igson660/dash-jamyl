'use client';

import { acreElectoralProfile2020 } from '@/lib/municipalityData';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

export default function Analytics() {
  const ageData = acreElectoralProfile2020.ageGroups.map((g) => ({
    range: g.range,
    percentage: g.percentage,
  }));

  const educationData = acreElectoralProfile2020.education.map((e) => ({
    level: e.level.length > 18 ? e.level.substring(0, 18) + '…' : e.level,
    percentage: e.percentage,
  }));

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Análises</h1>
        <p className="text-slate-500 mt-1 text-sm">Perfil demográfico do eleitorado acreano</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Eleitores Aptos', value: '587.222', sub: 'Acre – 2020' },
          { label: 'Comparecimento', value: '77,5%', sub: '455.438 eleitores' },
          { label: 'População Urbana', value: '~73%', sub: 'Rio Branco 69%' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500 mb-1">{s.label}</p>
            <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{s.value}</p>
            <p className="text-[11px] text-slate-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Age */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Faixa Etária</h2>
          <p className="text-xs text-slate-500 mb-4">Distribuição do eleitorado por idade</p>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="range" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} unit="%" width={40} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px' }} formatter={(v: number) => [`${v}%`, 'Percentual']} />
                <Bar dataKey="percentage" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Escolaridade</h2>
          <p className="text-xs text-slate-500 mb-4">Nível educacional dos eleitores</p>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={educationData} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} unit="%" />
                <YAxis dataKey="level" type="category" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} width={110} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px' }} formatter={(v: number) => [`${v}%`, 'Percentual']} />
                <Bar dataKey="percentage" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Gender & Marital Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Gênero</h2>
          <p className="text-xs text-slate-500 mb-4">Distribuição por gênero</p>
          <div className="space-y-4">
            {acreElectoralProfile2020.gender.map((item) => (
              <div key={item.gender}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-slate-700">{item.gender}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Estado Civil</h2>
          <p className="text-xs text-slate-500 mb-4">Distribuição por estado civil</p>
          <div className="space-y-4">
            {acreElectoralProfile2020.maritalStatus.map((item) => (
              <div key={item.status}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-slate-700">{item.status}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
