'use client';

export default function InfluenciaPage() {
  const regions = [
    { name: 'Rio Branco', classification: 'Alta Influência', weight: '45,3%', description: 'Maior colégio eleitoral. Define eleições estaduais. Concentra 266.883 eleitores.' },
    { name: 'Cruzeiro do Sul', classification: 'Alta Influência', weight: '12,5%', description: 'Segunda maior cidade. Importante para interior. Base de lideranças regionais.' },
    { name: 'Tarauacá', classification: 'Média Influência', weight: '6,8%', description: 'Influência regional. Importante para Vale do Juruá.' },
    { name: 'Feijó', classification: 'Média Influência', weight: '5,2%', description: 'Influência regional. Polo do Vale do Purus.' },
    { name: 'Outros Municípios', classification: 'Baixa a Média', weight: '30,2%', description: 'Distribuído entre 18 municípios menores.' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">14. Mapa de Influência Eleitoral</h1>
        <p className="text-lg opacity-90">Polos de influência política por região</p>
      </div>

      <div className="space-y-4">
        {regions.map((region, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{region.weight} do eleitorado</p>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                region.classification === 'Alta Influência' ? 'bg-red-100 text-red-800' :
                region.classification === 'Média Influência' ? 'bg-amber-100 text-amber-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {region.classification}
              </span>
            </div>
            <p className="text-sm text-gray-700">{region.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
        <h2 className="text-xl font-bold text-indigo-900 mb-4">Estratégia Regional</h2>
        <ul className="space-y-2 text-sm text-indigo-800">
          <li><strong>Rio Branco (Prioridade 1):</strong> Consolidar 60-70% dos votos na capital</li>
          <li><strong>Cruzeiro do Sul (Prioridade 2):</strong> Expandir presença no interior</li>
          <li><strong>Demais Regiões (Prioridade 3):</strong> Criar estrutura mínima de campanha</li>
        </ul>
      </div>
    </div>
  );
}
