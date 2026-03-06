'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SimulacaoDeputadoPage() {
  const simulationData = [
    { scenario: 'Conservador', votes: 3500, percentage: 0.59, elected: false },
    { scenario: 'Realista', votes: 4200, percentage: 0.71, elected: false },
    { scenario: 'Otimista', votes: 5500, percentage: 0.93, elected: true },
  ];

  const electionMetrics = {
    totalVoters: 588433,
    validVotes: 588433 * 0.96,
    quocient: Math.floor((588433 * 0.96) / 24),
    average: Math.floor((588433 * 0.96) / 24),
    seats: 24,
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">16. Simulação Deputado Estadual 2026</h1>
        <p className="text-lg opacity-90">Cálculo de viabilidade e cenários eleitorais</p>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Quociente Eleitoral</p>
          <p className="text-3xl font-bold text-purple-600">{electionMetrics.quocient.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-2">Votos válidos ÷ Cadeiras</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Média Necessária</p>
          <p className="text-3xl font-bold text-purple-600">{electionMetrics.average.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-2">Para 1 cadeira</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Cadeiras Disponíveis</p>
          <p className="text-3xl font-bold text-purple-600">{electionMetrics.seats}</p>
          <p className="text-xs text-gray-500 mt-2">Deputados Estaduais</p>
        </div>
      </div>

      {/* Gráfico de Simulação */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Cenários de Votação 2026</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={simulationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="scenario" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            <Bar dataKey="votes" fill="#a855f7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Análise de Cenários */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Análise de Cenários</h2>
        {simulationData.map((scenario, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{scenario.scenario}</h3>
                <p className="text-sm text-gray-600 mt-1">{scenario.votes.toLocaleString()} votos ({(scenario.percentage * 100).toFixed(1)}% da média)</p>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                scenario.elected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {scenario.elected ? 'Eleito' : 'Não Eleito'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
