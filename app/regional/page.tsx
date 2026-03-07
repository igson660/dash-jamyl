"use client";

import { municipalityElectionData } from "@/lib/municipalityData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Regional() {
  const top10 = municipalityElectionData
    .filter((m) => m.votes2018)
    .sort((a, b) => (b.votes2018 || 0) - (a.votes2018 || 0))
    .slice(0, 10);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1
          className="text-2xl font-bold text-slate-900"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Cobertura Regional
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Distribuição de votos por município e região
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Eleitores Aptos 2024",
            value: "270.518",
            sub: "Rio Branco",
          },
          { label: "Comparecimento", value: "205.664", sub: "75,75%" },
          { label: "Votos Válidos", value: "197.727", sub: "96,18%" },
          { label: "Jamyl 2018", value: "5.149", sub: "-" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 p-4"
          >
            <p className="text-xs text-slate-500 mb-1">{s.label}</p>
            <p
              className="text-xl font-bold text-slate-900"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {s.value}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Top 10 Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2
          className="text-base font-semibold text-slate-900 mb-1"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Top 10 Municípios
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Eleição 2018 – Deputado Federal
        </p>
        <div style={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={top10}
              margin={{ top: 5, right: 10, left: 0, bottom: 50 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                vertical={false}
              />
              <XAxis
                dataKey="municipality"
                tick={{ fontSize: 11, fill: "#64748b" }}
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
                angle={-40}
                textAnchor="end"
                height={70}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={45}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(v: number) => [v.toLocaleString("pt-BR"), "Votos"]}
              />
              <Bar dataKey="votes2018" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Full Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2
            className="text-base font-semibold text-slate-900"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Todos os Municípios
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Dados de votação por período
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Município
                </th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Região
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  2010
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  2014
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  2018
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  2020
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  2024
                </th>
              </tr>
            </thead>
            <tbody>
              {municipalityElectionData.map((m, idx) => (
                <tr
                  key={m.municipality}
                  className={`border-t border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="px-5 py-3 font-medium text-slate-800">
                    {m.municipality}
                  </td>
                  <td className="px-5 py-3 text-slate-600">{m.region}</td>
                  <td className="px-5 py-3 text-right text-slate-700">
                    {m.votes2010?.toLocaleString("pt-BR") || "–"}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-700">
                    {m.votes2014?.toLocaleString("pt-BR") || "–"}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-700">
                    {m.votes2018?.toLocaleString("pt-BR") || "–"}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-700">
                    {m.votes2020?.toLocaleString("pt-BR") || "–"}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-700">
                    {m.votes2024?.toLocaleString("pt-BR") || "–"}
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
