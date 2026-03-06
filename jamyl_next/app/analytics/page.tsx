'use client';

import { acreElectoralProfile2020 } from '@/lib/municipalityData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Users, TrendingUp, BookOpen } from 'lucide-react';

export default function Analytics() {
  const ageData = acreElectoralProfile2020.ageGroups.map((group) => ({
    range: group.range,
    percentage: group.percentage,
  }));

  const educationData = acreElectoralProfile2020.education.map((edu) => ({
    level: edu.level.substring(0, 15),
    percentage: edu.percentage,
  }));

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Análises</h1>
        <p className="text-gray-500">Perfil demográfico do eleitorado acreano</p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Eleitores Aptos', value: '587.222', subtext: 'Acre - 2020', icon: Users, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
          { label: 'Comparecimento', value: '77,5%', subtext: '455.438 eleitores', icon: TrendingUp, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
          { label: 'População Urbana', value: '~73%', subtext: 'Rio Branco 69%', icon: BookOpen, bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Age Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Faixa Etária</h2>
            <p className="text-sm text-gray-500">Distribuição do eleitorado acreano</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData} margin={{ top: 5, right: 30, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="range" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="percentage" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Education Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Escolaridade</h2>
            <p className="text-sm text-gray-500">Nível educacional dos eleitores</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={educationData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis type="number" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis dataKey="level" type="category" stroke="#9ca3af" width={110} style={{ fontSize: '11px' }} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="percentage" fill="#10b981" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gender and Marital Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Gênero</h2>
            <p className="text-sm text-gray-500">Distribuição por gênero</p>
          </div>
          <div className="space-y-6">
            {acreElectoralProfile2020.gender.map((item) => (
              <div key={item.gender}>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">{item.gender}</span>
                  <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Estado Civil</h2>
            <p className="text-sm text-gray-500">Distribuição por estado civil</p>
          </div>
          <div className="space-y-6">
            {acreElectoralProfile2020.maritalStatus.map((item) => (
              <div key={item.status}>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">{item.status}</span>
                  <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
