'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Building2, TrendingDown } from 'lucide-react';

const executiveData = [
  { year: 2020, votos: 1509, cargo: 'Prefeito' },
  { year: 2024, votos: 1880, cargo: 'Vereador' },
];

export default function Executivo() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Candidaturas Executivas</h1>
        <p className="text-gray-500">Análise de candidaturas para Prefeito e Vereador</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total de Candidaturas', value: '2', subtext: '2020 (Prefeito), 2024 (Vereador)', icon: Building2, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
          { label: 'Total de Votos', value: '3.389', subtext: 'Todas as candidaturas', icon: TrendingDown, bgColor: 'bg-red-50', iconColor: 'text-red-600' },
          { label: 'Média por Candidatura', value: '1.695', subtext: 'Votos por eleição', icon: Users, bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} className={stat.iconColor} />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{stat.value}</h3>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* Comparison Chart */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Comparativo de Votos</h2>
          <p className="text-sm text-gray-500">Candidaturas para Prefeito e Vereador</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={executiveData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
            <Bar dataKey="votos" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Prefeito Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-xl font-bold text-blue-900" style={{ fontFamily: 'Sora, sans-serif' }}>Candidatura a Prefeito</h2>
          <p className="text-sm text-blue-700 mt-1">Eleição Municipal 2020</p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Ano', value: '2020' },
              { label: 'Cargo', value: 'Prefeito' },
              { label: 'Partido', value: 'PSDB' },
              { label: 'Votos', value: '1.509' },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <p className="text-sm font-medium text-gray-500 mb-2">{item.label}</p>
                <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-900">
              <span className="font-semibold">Status:</span> Não eleito - Rio Branco elegeu 1 prefeito em 2020
            </p>
          </div>
        </div>
      </div>

      {/* Vereador Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-green-50 to-green-100">
          <h2 className="text-xl font-bold text-green-900" style={{ fontFamily: 'Sora, sans-serif' }}>Candidatura a Vereador</h2>
          <p className="text-sm text-green-700 mt-1">Eleição Municipal 2024</p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Ano', value: '2024' },
              { label: 'Cargo', value: 'Vereador' },
              { label: 'Partido', value: 'PL' },
              { label: 'Votos', value: '1.880' },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <p className="text-sm font-medium text-gray-500 mb-2">{item.label}</p>
                <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <span className="font-semibold">Status:</span> 4º Suplente - Rio Branco elegeu 11 vereadores em 2024
            </p>
          </div>
        </div>
      </div>

      {/* Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 sm:p-8 border border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Desafios Identificados</h3>
          <ul className="space-y-3 text-red-900 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><span className="font-semibold">Queda em 2020:</span> -67,2% de votos (Prefeito vs Deputado)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><span className="font-semibold">Recuperação parcial:</span> +24,6% em 2024 (Vereador)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><span className="font-semibold">Foco necessário:</span> Reconstruir base eleitoral</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 sm:p-8 border border-green-200">
          <h3 className="text-xl font-bold text-green-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Oportunidades</h3>
          <ul className="space-y-3 text-green-900 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span><span className="font-semibold">Crescimento 2024:</span> Recuperação de votos em 2024</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span><span className="font-semibold">Novo partido:</span> Mudança para PL pode ampliar base</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span><span className="font-semibold">Potencial 2026:</span> Retorno como Deputado Estadual</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
