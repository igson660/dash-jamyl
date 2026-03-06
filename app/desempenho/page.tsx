'use client';

import { jamylElectionData } from '@/lib/electionData';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp } from 'lucide-react';


export default function DesempenhoPage() {
  const performanceByPosition = [
    { position: 'Deputado Estadual', elections: 3, totalVotes: 12586, avgVotes: 4195, bestResult: 5529 },
    { position: 'Deputado Federal', elections: 1, totalVotes: 5149, avgVotes: 5149, bestResult: 5149 },
    { position: 'Prefeito', elections: 1, totalVotes: 1509, avgVotes: 1509, bestResult: 1509 },
    { position: 'Vereador', elections: 1, totalVotes: 1880, avgVotes: 1880, bestResult: 1880 },
  ];

  const competitivenessAnalysis = [
    { year: 2010, position: 'Dep. Estadual', votes: 4672, status: 'Eleito', competitiveness: 'Média' },
    { year: 2014, position: 'Dep. Estadual', votes: 5529, status: 'Não eleito', competitiveness: 'Alta' },
    { year: 2018, position: 'Dep. Federal', votes: 5149, status: 'Não eleito', competitiveness: 'Muito Alta' },
    { year: 2020, position: 'Prefeito', votes: 1509, status: 'Não eleito', competitiveness: 'Muito Alta' },
    { year: 2022, position: 'Dep. Estadual', votes: 2385, status: 'Não eleito', competitiveness: 'Alta' },
    { year: 2024, position: 'Vereador', votes: 1880, status: '4º Suplente', competitiveness: 'Muito Alta' },
  ];

  const chartData = jamylElectionData.elections.map(e => ({
    year: e.year,
    votos: e.votes,
    cargo: e.position.substring(0, 10),
  }));

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">4. Desempenho Eleitoral</h1>
        <p className="text-lg opacity-90">Análise comparativa por cargo e contexto de competitividade</p>
      </div>

      {/* Resumo por Cargo */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Desempenho por Cargo Disputado</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Cargo</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Eleições</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Total Votos</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Média</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Melhor Resultado</th>
              </tr>
            </thead>
            <tbody>
              {performanceByPosition.map((item, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{item.position}</td>
                  <td className="px-4 py-3 text-gray-700">{item.elections}</td>
                  <td className="px-4 py-3 text-gray-700">{item.totalVotes.toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-700">{item.avgVotes.toLocaleString()}</td>
                  <td className="px-4 py-3 font-semibold text-orange-600">{item.bestResult.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gráfico de Evolução */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Evolução de Votos por Eleição</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value) => value.toLocaleString()}
            />
            <Line type="monotone" dataKey="votos" stroke="#ea580c" strokeWidth={3} dot={{ fill: '#ea580c', r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Análise de Competitividade */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Análise de Competitividade por Eleição</h2>
        <div className="space-y-3">
          {competitivenessAnalysis.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-gray-900">{item.year} - {item.position}</p>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.status === 'Eleito' ? 'bg-green-100 text-green-800' :
                    item.status.includes('Suplente') ? 'bg-amber-100 text-amber-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.votes.toLocaleString()} votos</p>
              </div>
              <span className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                item.competitiveness === 'Média' ? 'bg-amber-100 text-amber-800' :
                item.competitiveness === 'Alta' ? 'bg-orange-100 text-orange-800' :
                'bg-red-100 text-red-800'
              }`}>
                {item.competitiveness}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-orange-50 rounded-lg border border-orange-200 p-6">
        <h2 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Insights de Desempenho
        </h2>
        <ul className="space-y-3 text-sm text-orange-800">
          <li><strong>Melhor Desempenho:</strong> Deputado Estadual 2014 com 5.529 votos (não eleito)</li>
          <li><strong>Cargo Mais Competitivo:</strong> Deputado Federal 2018 (eleição com maior número de candidatos)</li>
          <li><strong>Desafio Atual:</strong> Eleição municipal 2024 com 1.880 votos (4º suplente)</li>
          <li><strong>Padrão Observado:</strong> Melhor desempenho em eleições estaduais (Deputado Estadual) vs municipais</li>
          <li><strong>Recomendação:</strong> Focar em eleição estadual 2026 onde tem histórico mais forte</li>
        </ul>
      </div>
    </div>
  );
}
