'use client';

import { deputadoElections } from '@/lib/municipalityData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award } from 'lucide-react';

const deputadoData = [
  { year: 2010, votos: 4672, cargo: 'Estadual' },
  { year: 2014, votos: 5529, cargo: 'Estadual' },
  { year: 2018, votos: 5149, cargo: 'Federal' },
];

export default function Deputado() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Candidaturas a Deputado</h1>
        <p className="text-gray-500">Análise de candidaturas para Deputado Estadual e Federal</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total de Candidaturas', value: '3', subtext: '2010, 2014, 2018', icon: Award, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
          { label: 'Total de Votos', value: '15.350', subtext: 'Todas as candidaturas', icon: TrendingUp, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
          { label: 'Média por Candidatura', value: '5.117', subtext: 'Votos por eleição', icon: Award, bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
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

      {/* Evolution Chart */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Evolução de Votos</h2>
          <p className="text-sm text-gray-500">Histórico de votação para Deputado</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={deputadoData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
            <Line 
              type="monotone" 
              dataKey="votos" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>Candidaturas Detalhadas</h2>
          <p className="text-sm text-gray-500 mt-1">Informações completas de cada candidatura</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ano</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cargo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Partido</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Votos</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Região</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {deputadoElections.map((election) => (
                <tr key={election.year} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-600">{election.year}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{election.position}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{election.party}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                    {election.totalVotes.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{election.region}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                      Suplente
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Melhor Desempenho</h3>
          <p className="text-blue-700 text-sm mb-4">Candidatura com maior votação</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">Ano</span>
              <span className="text-blue-900 font-bold">2014</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">Cargo</span>
              <span className="text-blue-900 font-bold">Deputado Estadual</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">Votos</span>
              <span className="text-blue-900 font-bold text-xl">5.529</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 sm:p-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Meta 2026</h3>
          <p className="text-amber-700 text-sm mb-4">Objetivo para próxima candidatura</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Cargo</span>
              <span className="text-amber-900 font-bold">Deputado Estadual</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Meta de Votos</span>
              <span className="text-amber-900 font-bold">6.500+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Crescimento</span>
              <span className="text-amber-900 font-bold">+17,5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
