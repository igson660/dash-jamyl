'use client';

import { municipalityElectionData } from '@/lib/municipalityData';

export default function Projection() {
  const totalVotes2018 = municipalityElectionData.reduce((sum, m) => sum + (m.votes2018 || 0), 0);

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Projeção</h1>
        <p className="text-gray-500">Dados por município de todas as candidaturas</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Resumo 2018</h3>
        <p className="text-4xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{totalVotes2018.toLocaleString('pt-BR')}</p>
        <p className="text-sm text-gray-500 mt-2">Total de votos em 22 municípios</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>Dados por Município (2018)</h2>
          <p className="text-sm text-gray-500 mt-1">Distribuição de votos por município</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Município</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Região</th>
                <th className="px-6 py-4 text-right font-semibold text-gray-900">Votos 2018</th>
                <th className="px-6 py-4 text-right font-semibold text-gray-900">Percentual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {municipalityElectionData
                .filter(m => m.votes2018)
                .sort((a, b) => (b.votes2018 || 0) - (a.votes2018 || 0))
                .map((m) => (
                  <tr key={m.municipality} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-blue-600">{m.municipality}</td>
                    <td className="px-6 py-4 text-gray-700">{m.region}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">{m.votes2018?.toLocaleString('pt-BR')}</td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {((m.votes2018 || 0) / totalVotes2018 * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
