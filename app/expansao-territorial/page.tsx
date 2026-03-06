'use client';

import { MapPin } from 'lucide-react';

export default function ExpansaoTerritorialPage() {
  const municipalities = [
    { name: 'Rio Branco', region: 'Baixo Acre', current: 1880, target: 2500, growth: '33%' },
    { name: 'Cruzeiro do Sul', region: 'Tarauacá/Envira', current: 150, target: 400, growth: '167%' },
    { name: 'Sena Madureira', region: 'Vale do Purus', current: 120, target: 350, growth: '192%' },
    { name: 'Feijó', region: 'Tarauacá/Envira', current: 80, target: 250, growth: '213%' },
    { name: 'Tarauacá', region: 'Tarauacá/Envira', current: 60, target: 200, growth: '233%' },
    { name: 'Mâncio Lima', region: 'Tarauacá/Envira', current: 40, target: 150, growth: '275%' },
  ];

  const regions = [
    { name: 'Baixo Acre', current: 1880, target: 2500, focus: 'Consolidação' },
    { name: 'Tarauacá/Envira', current: 200, target: 900, focus: 'Expansão Agressiva' },
    { name: 'Vale do Purus', current: 120, target: 500, focus: 'Expansão' },
    { name: 'Alto Acre', current: 100, target: 400, focus: 'Penetração' },
    { name: 'Vale do Juruá', current: 80, target: 300, focus: 'Penetração' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">17. Mapeamento de Expansão Territorial</h1>
        <p className="text-lg opacity-90">Estratégia de crescimento por município e região</p>
      </div>

      {/* Municípios */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-green-600" />
          Municípios Prioritários
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Município</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Região</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Votos Atuais</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Meta</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Crescimento</th>
              </tr>
            </thead>
            <tbody>
              {municipalities.map((m, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{m.name}</td>
                  <td className="px-4 py-3 text-gray-700">{m.region}</td>
                  <td className="px-4 py-3 text-gray-700">{m.current}</td>
                  <td className="px-4 py-3 text-gray-700">{m.target}</td>
                  <td className="px-4 py-3 font-semibold text-green-600">{m.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regiões */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Estratégia por Regional</h2>
        {regions.map((region, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
                <p className="text-sm text-gray-600 mt-1">De {region.current} para {region.target} votos</p>
              </div>
              <span className="px-4 py-2 rounded-lg font-semibold text-sm bg-green-100 text-green-800">
                {region.focus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
