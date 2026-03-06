'use client';

import { jamylElectionHistory } from '@/lib/municipalityData';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const electionData = [
  { year: 2010, votos: 4672 },
  { year: 2014, votos: 5529 },
  { year: 2018, votos: 5149 },
  { year: 2020, votos: 1509 },
  { year: 2024, votos: 1880 },
];

const riobrancoCadeiras2024 = [
  { name: 'Eleitos', value: 11, fill: '#0284c7' },
  { name: 'Suplentes', value: 6, fill: '#38bdf8' },
  { name: 'Não eleitos', value: 10, fill: '#e5e7eb' },
];

const kpis = [
  {
    label: 'Total de Eleições',
    value: '5',
    subtext: '2010-2024',
    icon: Award,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Total de Votos',
    value: '18.739',
    subtext: 'Todas as candidaturas',
    icon: Users,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    label: 'Média por Eleição',
    value: '3.748',
    subtext: 'Votos por candidatura',
    icon: TrendingUp,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    label: 'Maior Votação',
    value: '5.529',
    subtext: '2014 - Dep. Estadual',
    icon: MapPin,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Jamyl Asfury
              </h1>
              <p className="text-blue-100 text-lg font-medium">
                Candidato a Deputado Estadual 2026
              </p>
            </div>
            <div className="hidden sm:block">
              <Award size={80} className="text-blue-300 opacity-30" />
            </div>
          </div>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Análise completa de dados eleitorais e trajetória política no Acre
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div className={`w-12 h-12 ${kpi.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} className={kpi.iconColor} />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">{kpi.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                {kpi.value}
              </h3>
              <p className="text-xs text-gray-400">{kpi.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
              Evolução de Votos
            </h2>
            <p className="text-sm text-gray-500">Histórico de votação 2010-2024</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={electionData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorVotos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="year" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Line
                type="monotone"
                dataKey="votos"
                stroke="#0284c7"
                strokeWidth={3}
                dot={{ fill: '#0284c7', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
              Rio Branco 2024
            </h2>
            <p className="text-sm text-gray-500">Distribuição de cadeiras</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riobrancoCadeiras2024}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={70}
                dataKey="value"
              >
                {riobrancoCadeiras2024.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Histórico de Candidaturas
          </h2>
          <p className="text-sm text-gray-500 mt-1">Resumo de todas as eleições</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ano</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cargo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Partido</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Votos</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[2010, 2014, 2018, 2020, 2024].map((year) => {
                const election = jamylElectionHistory[year as keyof typeof jamylElectionHistory];
                const isNotElected = year === 2020 || year === 2024;
                return (
                  <tr key={year} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{year}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{election.position}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{election.party}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                      {election.totalVotes.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          isNotElected
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isNotElected ? 'Não eleito' : 'Suplente'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
