'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const growthData = [
  { year: 2010, votos: 4672 },
  { year: 2014, votos: 5529 },
  { year: 2018, votos: 5149 },
  { year: 2020, votos: 1509 },
  { year: 2024, votos: 1880 },
];

export default function Growth() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Crescimento</h1>
        <p className="text-gray-500">Análise de tendências e evolução de votos</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Evolução de Votos</h2>
          <p className="text-sm text-gray-500">Histórico completo 2010-2024</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={growthData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorVotos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
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

      {/* Growth Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Crescimento 2010-2014</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>+18,3%</h3>
              <p className="text-sm text-gray-500">De 4.672 para 5.529 votos</p>
            </div>
            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-7 h-7 text-green-600" />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">Melhor período de crescimento</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Queda 2018-2020</p>
              <h3 className="text-4xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>-70,7%</h3>
              <p className="text-sm text-gray-500">De 5.149 para 1.509 votos</p>
            </div>
            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center">
              <ArrowDownRight className="w-7 h-7 text-red-600" />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">Mudança de cargo (Dep. Federal → Prefeito)</p>
          </div>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 border border-blue-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-2">Pico de Votação</p>
              <p className="text-4xl font-bold text-blue-700" style={{ fontFamily: 'Sora, sans-serif' }}>5.529</p>
              <p className="text-sm text-blue-600 mt-2">2014 - Deputado Estadual</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 sm:p-8 border border-red-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-red-900 mb-2">Menor Votação</p>
              <p className="text-4xl font-bold text-red-700" style={{ fontFamily: 'Sora, sans-serif' }}>1.509</p>
              <p className="text-sm text-red-600 mt-2">2020 - Prefeito</p>
            </div>
            <TrendingDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Recovery Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>Recuperação 2020-2024</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <p className="text-3xl font-bold text-green-700" style={{ fontFamily: 'Sora, sans-serif' }}>+24,6%</p>
            <p className="text-sm text-green-600 mt-1">Crescimento</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-700" style={{ fontFamily: 'Sora, sans-serif' }}>+371</p>
            <p className="text-sm text-blue-600 mt-1">Votos a mais</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-xl">
            <p className="text-3xl font-bold text-amber-700" style={{ fontFamily: 'Sora, sans-serif' }}>4º Sup.</p>
            <p className="text-sm text-amber-600 mt-1">Posição 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
