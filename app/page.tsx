"use client";

import { jamylElectionData } from "@/lib/electionData";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, Users, MapPin, Award } from "lucide-react";

export default function Home() {
  const chartData = jamylElectionData.elections.map((e) => ({
    year: e.year,
    votos: e.votes,
  }));

  const evolutionData = [
    { period: "2010-2014", variation: 857 },
    { period: "2014-2018", variation: -380 },
    { period: "2018-2020", variation: -3640 },
    { period: "2020-2022", variation: 876 },
    { period: "2022-2024", variation: -505 },
  ];

  const positionData = [
    { name: "Deputado Estadual", value: 12586, fill: "#0284c7" },
    { name: "Deputado Federal", value: 5149, fill: "#16a34a" },
    { name: "Prefeito", value: 1509, fill: "#f59e0b" },
    { name: "Vereador", value: 1880, fill: "#ef4444" },
  ];

  const kpis = [
    {
      label: "Total de Votos",
      value: "21.124",
      sub: "6 eleições (2010-2024)",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Melhor Desempenho",
      value: "5.529",
      sub: "2014 – Dep. Estadual",
      icon: Award,
      color: "bg-emerald-500",
    },
    {
      label: "Média por Eleição",
      value: "3.520",
      sub: "Votos por candidatura",
      icon: TrendingUp,
      color: "bg-amber-500",
    },
    {
      label: "Eleições Vencidas",
      value: "1",
      sub: "Deputado Estadual (2010)",
      icon: MapPin,
      color: "bg-violet-500",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Perfil Eleitoral - Jamyl Asfury
        </h1>
        <p className="text-lg opacity-90">
          Análise Técnica Completa (2010-2024) | Candidato a Deputado Estadual
          2026
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon size={24} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                {kpi.label}
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {kpi.value}
              </p>
              <p className="text-xs text-gray-500">{kpi.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolução de Votos */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            Evolução de Votos
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Histórico completo 2010-2024
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value) => value.toLocaleString()}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
              <Line
                type="monotone"
                dataKey="votos"
                stroke="#0284c7"
                strokeWidth={2}
                dot={{ fill: "#0284c7", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição por Cargo */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            Distribuição por Cargo
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Total de votos por tipo de candidatura
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={positionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) =>
                  `${name}: ${value.toLocaleString()}`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {positionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Variação por Período */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Variação de Votos por Período
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Análise de crescimento e queda entre eleições
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={evolutionData}
            margin={{ top: 5, right: 30, left: 0, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="period"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 11 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value) => value.toLocaleString()}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
            <Bar dataKey="variation" fill="#0284c7" name="Variação de Votos" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Histórico Completo */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Histórico Completo de Candidaturas
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Todas as eleições disputadas (2010-2024)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Ano
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Cargo
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Partido
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Local
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Votos
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {jamylElectionData.elections.map((election, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  <td className="px-4 py-3 font-semibold text-blue-600">
                    {election.year}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {election.position}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{election.party}</td>
                  <td className="px-4 py-3 text-gray-700">{election.state}</td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-900">
                    {election.votes.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        election.status === "Eleito"
                          ? "bg-green-100 text-green-800"
                          : election.status.includes("Suplente")
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {election.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
