'use client';

import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export default function ViabilidadePage() {
  const viabilityMatrix = [
    { factor: 'Histórico Eleitoral', score: 7, status: 'Positivo', description: 'Eleito em 2010, presença em 6 eleições' },
    { factor: 'Base Consolidada', score: 5, status: 'Moderado', description: '1.880 votos em 2024, precisa crescer 2x' },
    { factor: 'Penetração Territorial', score: 4, status: 'Fraco', description: 'Concentrado em Rio Branco, interior fraco' },
    { factor: 'Estrutura Política', score: 6, status: 'Positivo', description: 'Apoio de lideranças locais' },
    { factor: 'Recursos Financeiros', score: 5, status: 'Moderado', description: 'Necessário investimento em campanha' },
    { factor: 'Alinhamento Ideológico', score: 7, status: 'Positivo', description: 'Alinhado com tendências estaduais' },
  ];

  const scenarios = [
    { name: 'Pessimista', votes: 2500, probability: '15%', outcome: 'Não eleito' },
    { name: 'Conservador', votes: 3500, probability: '35%', outcome: 'Não eleito' },
    { name: 'Realista', votes: 4200, probability: '35%', outcome: 'Não eleito' },
    { name: 'Otimista', votes: 5500, probability: '15%', outcome: 'Eleito' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">19. Matriz de Viabilidade 2026</h1>
        <p className="text-lg opacity-90">Avaliação de fatores críticos para eleição</p>
      </div>

      {/* Matriz */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Fatores de Viabilidade</h2>
        {viabilityMatrix.map((item, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{item.factor}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-indigo-600">{item.score}/10</span>
                {item.score >= 7 && <CheckCircle className="text-green-600" size={24} />}
                {item.score >= 5 && item.score < 7 && <AlertCircle className="text-amber-600" size={24} />}
                {item.score < 5 && <XCircle className="text-red-600" size={24} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cenários */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Cenários de Resultado</h2>
        <div className="space-y-3">
          {scenarios.map((scenario, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <div>
                <p className="font-semibold text-gray-900">{scenario.name}</p>
                <p className="text-sm text-gray-600">{scenario.votes.toLocaleString()} votos</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-indigo-600">{scenario.probability}</p>
                <p className={`text-sm font-semibold ${scenario.outcome === 'Eleito' ? 'text-green-600' : 'text-red-600'}`}>
                  {scenario.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusão */}
      <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
        <h2 className="text-xl font-bold text-indigo-900 mb-4">Conclusão de Viabilidade</h2>
        <p className="text-sm text-indigo-800 mb-3">
          <strong>Viabilidade Geral: MODERADA</strong>
        </p>
        <ul className="space-y-2 text-sm text-indigo-800">
          <li><strong>Pontos Fortes:</strong> Histórico eleitoral, alinhamento ideológico, estrutura política</li>
          <li><strong>Desafios:</strong> Base reduzida, penetração territorial limitada, crescimento necessário de 2x</li>
          <li><strong>Probabilidade de Eleição:</strong> ~15% (cenário otimista)</li>
          <li><strong>Recomendação:</strong> Investir em expansão territorial e fortalecimento de base</li>
        </ul>
      </div>
    </div>
  );
}
