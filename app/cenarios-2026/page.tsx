'use client';

export default function Cenarios2026Page() {
  const scenarios = [
    {
      title: 'Cenário 1: Consolidação em Rio Branco',
      probability: '35%',
      votes: 3500,
      description: 'Foco exclusivo em Rio Branco, mantendo base consolidada',
      strategy: ['Campanha local intensiva', 'Parcerias com lideranças locais', 'Mídia regional', 'Mobilização de base'],
      result: 'Não eleito - insuficiente para cadeira',
    },
    {
      title: 'Cenário 2: Expansão Moderada',
      probability: '35%',
      votes: 4200,
      description: 'Crescimento em Rio Branco + presença em 2-3 municípios do interior',
      strategy: ['Campanha estadual moderada', 'Parcerias com lideranças regionais', 'Presença em Cruzeiro do Sul e Sena Madureira', 'Mídia estadual'],
      result: 'Não eleito - próximo à meta',
    },
    {
      title: 'Cenário 3: Expansão Agressiva',
      probability: '15%',
      votes: 5500,
      description: 'Crescimento forte em Rio Branco + penetração em interior (Tarauacá/Envira, Vale do Purus)',
      strategy: ['Campanha estadual forte', 'Parcerias com lideranças de múltiplas regiões', 'Presença em 5+ municípios', 'Mídia estadual + digital'],
      result: 'Eleito - 24º colocado',
    },
    {
      title: 'Cenário 4: Crescimento Extraordinário',
      probability: '5%',
      votes: 6500,
      description: 'Crescimento excepcional em todas as regiões',
      strategy: ['Campanha estadual massiva', 'Coligação forte', 'Presença em todos os municípios', 'Campanha digital robusta'],
      result: 'Eleito - 20º colocado',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">20. Cenários Eleitorais 2026</h1>
        <p className="text-lg opacity-90">Projeções de resultado por estratégia de campanha</p>
      </div>

      <div className="space-y-6">
        {scenarios.map((scenario, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{scenario.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-600">Probabilidade</p>
                <p className="text-2xl font-bold text-rose-600">{scenario.probability}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Estratégia</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {scenario.strategy.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Projeção</p>
                <div className="bg-rose-50 rounded-lg p-4 border border-rose-100">
                  <p className="text-3xl font-bold text-rose-600">{scenario.votes.toLocaleString()}</p>
                  <p className="text-xs text-gray-600 mt-2">votos estimados</p>
                </div>
              </div>
            </div>

            <div className={`p-3 rounded-lg text-sm font-semibold ${
              scenario.result.includes('Eleito') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {scenario.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
