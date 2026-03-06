'use client';

import { municipalityElectionData } from '@/lib/municipalityData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { MapPin, Users } from 'lucide-react';

export default function Regional() {
  const top10 = municipalityElectionData
    .filter(m => m.votes2018)
    .sort((a, b) => (b.votes2018 || 0) - (a.votes2018 || 0))
    .slice(0, 10);

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Cobertura Regional</h1>
        <p className="text-gray-500">Distribuição de votos por município e região</p>
      </div>

      {/* 2024 Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Eleitores Aptos 2024', value: '270.518', subtext: 'Rio Branco', icon: Users, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
          { label: 'Comparecimento 2024', value: '205.664', subtext: '75,75% de presença', icon: Users, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
          { label: 'Votos Válidos 2024', value: '197.727', subtext: '96,18% do total', icon: MapPin, bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
          { label: 'Jamyl 2024', value: '1.880', subtext: '4º Suplente', icon: MapPin, bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} className={stat.iconColor} />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{stat.value}</h3>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* Top 10 Chart */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>Top 10 Municípios</h2>
            <p className="text-sm text-gray-500">Eleição 2018</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={top10} margin={{ top: 5, right: 30, left: 0, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="municipality" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
            <Bar dataKey="votes2018" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Full Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>Todos os Municípios</h2>
          <p className="text-sm text-gray-500 mt-1">Dados de votação por período</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Município</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Região</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">2018</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">2020</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">2024</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {municipalityElectionData.map((m) => (
                <tr key={m.municipality} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-600">{m.municipality}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{m.region}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{m.votes2018 || '-'}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{m.votes2020 || '-'}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{m.votes2024 || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
