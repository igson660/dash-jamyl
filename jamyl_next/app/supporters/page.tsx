'use client';

import { Users, TrendingUp, Heart, Activity } from 'lucide-react';

export default function Supporters() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Apoiadores</h1>
        <p className="text-gray-500">Análise de engajamento e perfil de apoiadores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Apoiadores Ativos', value: '2.847', subtext: 'Últimos 6 meses', icon: Users, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
          { label: 'Taxa de Engajamento', value: '34,2%', subtext: 'Interações/Seguidores', icon: Heart, bgColor: 'bg-red-50', iconColor: 'text-red-600' },
          { label: 'Crescimento Mensal', value: '+8,5%', subtext: 'Média de crescimento', icon: TrendingUp, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} className={stat.iconColor} />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{stat.value}</h3>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Tipos de Apoiadores</h2>
          <p className="text-sm text-gray-500">Segmentação de base de apoio</p>
        </div>
        <div className="space-y-6">
          {[
            { type: 'Apoiadores Frequentes', count: 1200, percentage: 42, color: 'from-blue-400 to-blue-600' },
            { type: 'Apoiadores Ocasionais', count: 980, percentage: 34, color: 'from-purple-400 to-purple-600' },
            { type: 'Apoiadores Potenciais', count: 667, percentage: 24, color: 'from-amber-400 to-amber-600' },
          ].map((item) => (
            <div key={item.type} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-700">{item.type}</span>
                <span className="text-sm font-bold text-gray-900">{item.count} ({item.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-500`} 
                  style={{ width: `${item.percentage}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Atividade Diária</h2>
          <p className="text-sm text-gray-500">Padrão de engajamento semanal</p>
        </div>
        <div className="grid grid-cols-7 gap-3">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((day, i) => {
            const heights = [60, 75, 85, 90, 95, 70, 50];
            return (
              <div key={day} className="text-center">
                <p className="text-xs font-semibold text-gray-500 mb-3">{day}</p>
                <div className="w-full bg-gray-100 rounded-lg h-32 flex items-end justify-center p-2 relative group">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:shadow-lg"
                    style={{ height: `${heights[i]}%` }}
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {heights[i]}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 border border-blue-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Principais Apoiadores</h3>
            <p className="text-blue-700 text-sm mb-6">Top 5 influenciadores da campanha</p>
            <div className="space-y-3">
              {['João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 'Carlos Mendes'].map((name, idx) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-blue-900 font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <Activity className="w-16 h-16 text-blue-300" />
        </div>
      </div>
    </div>
  );
}
