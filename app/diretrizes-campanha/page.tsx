'use client';

import { Lightbulb, Target, TrendingUp, Users, MapPin } from 'lucide-react';

export default function DiretrizesPage() {
  const directives = [
    {
      title: 'Expansão Territorial Agressiva',
      icon: MapPin,
      description: 'Prioridade máxima: crescimento de 2.500 votos em interior',
      actions: [
        'Estabelecer estrutura em Cruzeiro do Sul, Sena Madureira, Feijó',
        'Parcerias com lideranças locais em cada região',
        'Campanha regional com propostas específicas',
        'Presença em eventos e atividades comunitárias',
      ],
    },
    {
      title: 'Consolidação em Rio Branco',
      icon: Target,
      description: 'Crescimento moderado de 620 votos na base consolidada',
      actions: [
        'Reativação de apoiadores 2022',
        'Campanha porta-a-porta em bairros-chave',
        'Parcerias com lideranças comunitárias',
        'Presença em eventos locais e redes sociais',
      ],
    },
    {
      title: 'Segmentação de Eleitorado',
      icon: Users,
      description: 'Abordagens específicas por segmento social',
      actions: [
        'Evangélicos: parcerias com lideranças religiosas',
        'Comerciantes: agenda de desburocratização',
        'Jovens: campanha digital robusta',
        'Servidores: defesa de direitos funcionais',
      ],
    },
    {
      title: 'Campanha Digital Integrada',
      icon: TrendingUp,
      description: 'Investimento em presença digital e redes sociais',
      actions: [
        'Criação de conteúdo diário para redes sociais',
        'Campanhas de publicidade digital segmentadas',
        'Engajamento com eleitorado jovem',
        'Monitoramento de tendências e feedback',
      ],
    },
  ];

  const timeline = [
    { period: 'Mar-Jun 2025', phase: 'Preparação', tasks: 'Estruturação, parcerias, pesquisa' },
    { period: 'Jul-Ago 2025', phase: 'Pré-campanha', tasks: 'Mobilização, campanhas iniciais' },
    { period: 'Set-Out 2025', phase: 'Campanha Oficial', tasks: 'Campanha em massa, eventos' },
    { period: 'Nov 2025', phase: 'Reta Final', tasks: 'Intensificação, mobilização de votos' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">21. Diretrizes Estratégicas de Campanha</h1>
        <p className="text-lg opacity-90">Plano de ação para eleição de Deputado Estadual 2026</p>
      </div>

      {/* Diretrizes */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Eixos Estratégicos</h2>
        {directives.map((directive, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{directive.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{directive.description}</p>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              {directive.actions.map((action, i) => (
                <li key={i} className="text-sm text-gray-700">✓ {action}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Cronograma de Campanha</h2>
        <div className="space-y-3">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.period}</p>
                <p className="text-sm text-gray-600">{item.phase}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-700">{item.tasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Métricas */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Indicadores de Sucesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-900">Meta de Votos</p>
            <p className="text-2xl font-bold text-blue-600">5.500+</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900">Crescimento Necessário</p>
            <p className="text-2xl font-bold text-blue-600">+131%</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900">Municípios Alvo</p>
            <p className="text-2xl font-bold text-blue-600">5+</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900">Probabilidade Eleição</p>
            <p className="text-2xl font-bold text-blue-600">15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
