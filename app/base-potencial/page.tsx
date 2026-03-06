'use client';

import { Target } from 'lucide-react';

export default function BasePotencialPage() {
  const segments = [
    { name: 'Eleitorado Evangélico', potential: 'Alto', percentage: '18-22%', description: 'Crescimento em Acre. Base potencial forte para candidatos com agenda conservadora.' },
    { name: 'Servidores Públicos', potential: 'Médio', percentage: '12-15%', description: 'Sensíveis a políticas de funcionalismo. Presença forte em Rio Branco.' },
    { name: 'Eleitorado Jovem (18-35)', potential: 'Médio-Alto', percentage: '25-30%', description: 'Requer estratégia digital. Importante para crescimento futuro.' },
    { name: 'Comerciantes e Empreendedores', potential: 'Alto', percentage: '8-12%', description: 'Sensíveis a políticas econômicas. Base tradicional de apoio.' },
    { name: 'Eleitorado Conservador', potential: 'Alto', percentage: '20-25%', description: 'Alinhado com agenda de segurança e valores tradicionais.' },
    { name: 'Mulheres (51,6% do eleitorado)', potential: 'Médio', percentage: '51,6%', description: 'Maior parcela do eleitorado. Requer agenda específica.' },
  ];

  const strategicApproach = [
    { segment: 'Evangélicos', strategy: 'Parcerias com lideranças religiosas, agenda de valores' },
    { segment: 'Servidores', strategy: 'Políticas de funcionalismo, defesa de direitos' },
    { segment: 'Jovens', strategy: 'Campanha digital, redes sociais, propostas inovadoras' },
    { segment: 'Comerciantes', strategy: 'Desburocratização, apoio a negócios, redução de impostos' },
    { segment: 'Conservadores', strategy: 'Segurança pública, ordem, valores tradicionais' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">15. Análise de Base Eleitoral Potencial</h1>
        <p className="text-lg opacity-90">Segmentos sociais com potencial de crescimento</p>
      </div>

      {/* Segmentos */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Segmentos Eleitorais Identificados</h2>
        {segments.map((segment, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{segment.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{segment.percentage} do eleitorado</p>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                segment.potential === 'Alto' ? 'bg-green-100 text-green-800' :
                segment.potential === 'Médio-Alto' ? 'bg-lime-100 text-lime-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {segment.potential}
              </span>
            </div>
            <p className="text-sm text-gray-700">{segment.description}</p>
          </div>
        ))}
      </div>

      {/* Estratégia */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target size={20} className="text-cyan-600" />
          Abordagem Estratégica por Segmento
        </h2>
        <div className="space-y-3">
          {strategicApproach.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.segment}</p>
                <p className="text-sm text-gray-700 mt-1">{item.strategy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendações */}
      <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6">
        <h2 className="text-xl font-bold text-cyan-900 mb-4">Recomendações de Crescimento</h2>
        <ul className="space-y-2 text-sm text-cyan-800">
          <li><strong>Prioridade 1:</strong> Fortalecer presença junto a evangélicos e conservadores (base potencial alta)</li>
          <li><strong>Prioridade 2:</strong> Expandir entre comerciantes e empreendedores</li>
          <li><strong>Prioridade 3:</strong> Investir em estratégia digital para eleitorado jovem</li>
          <li><strong>Prioridade 4:</strong> Desenvolver agenda específica para mulheres</li>
        </ul>
      </div>
    </div>
  );
}
