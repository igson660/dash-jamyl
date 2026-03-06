'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CrescimentoTerritorialPage() {
  const growthData = [
    { year: 2010, rioBranco: 4672, interior: 0, total: 4672 },
    { year: 2014, rioBranco: 5000, interior: 529, total: 5529 },
    { year: 2018, rioBranco: 4500, interior: 649, total: 5149 },
    { year: 2020, rioBranco: 1200, interior: 309, total: 1509 },
    { year: 2022, rioBranco: 1800, interior: 585, total: 2385 },
    { year: 2024, rioBranco: 1880, interior: 0, total: 1880 },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">18. Análise de Crescimento Territorial</h1>
        <p className="text-lg opacity-90">Evolução de votos por região ao longo das eleições</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Evolução Rio Branco vs Interior</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="rioBranco" stroke="#0d9488" strokeWidth={2} name="Rio Branco" />
            <Line type="monotone" dataKey="interior" stroke="#14b8a6" strokeWidth={2} name="Interior" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-teal-50 rounded-lg border border-teal-200 p-6">
          <h3 className="font-bold text-teal-900 mb-3">Rio Branco (Baixo Acre)</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li>Base consolidada: 1.880 votos (2024)</li>
            <li>Potencial: 2.500 votos</li>
            <li>Crescimento necessário: 620 votos (+33%)</li>
          </ul>
        </div>
        <div className="bg-teal-50 rounded-lg border border-teal-200 p-6">
          <h3 className="font-bold text-teal-900 mb-3">Interior (Demais Regiões)</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li>Votos atuais: ~200 votos</li>
            <li>Potencial: 2.700 votos</li>
            <li>Crescimento necessário: 2.500 votos (+1.150%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
