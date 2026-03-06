"use client";

import { jamylElectionData } from "@/lib/electionData";

export default function PerfilPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">1. Perfil Eleitoral</h1>
        <p className="text-lg opacity-90">
          Trajetória completa e análise de candidaturas
        </p>
      </div>

      {/* Resumo Executivo */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Resumo Executivo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-sm text-gray-600 mb-1">Total de Candidaturas</p>
            <p className="text-3xl font-bold text-gray-900">6</p>
            <p className="text-xs text-gray-500 mt-2">2010-2024</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="text-sm text-gray-600 mb-1">Total de Votos</p>
            <p className="text-3xl font-bold text-gray-900">21.124</p>
            <p className="text-xs text-gray-500 mt-2">Todas as eleições</p>
          </div>
          <div className="border-l-4 border-amber-600 pl-4">
            <p className="text-sm text-gray-600 mb-1">Eleições Vencidas</p>
            <p className="text-3xl font-bold text-gray-900">1</p>
            <p className="text-xs text-gray-500 mt-2">Deputado Estadual 2010</p>
          </div>
        </div>
      </div>

      {/* Análise Detalhada por Eleição */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          Análise Detalhada por Eleição
        </h2>
        {jamylElectionData.elections.map((election, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {election.year} - {election.position}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {election.state} | {election.party}
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                  election.status === "Eleito"
                    ? "bg-green-100 text-green-800"
                    : election.status.includes("Suplente")
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {election.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Votos</p>
                <p className="text-2xl font-bold text-blue-600">
                  {election.votes.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">% do Eleitorado</p>
                <p className="text-2xl font-bold text-gray-900">
                  {election.percentage.toFixed(2)}%
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs text-gray-600 mb-1">Contexto</p>
                <p className="text-sm text-gray-700">{election.notes}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-100">
              <p className="text-sm text-gray-700">
                {election.notes || "Análise em desenvolvimento"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Padrões Observados */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Padrões Observados
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Melhor Desempenho
            </h3>
            <p className="text-sm text-gray-700">
              5.529 votos em 2014 como Deputado Estadual (pico histórico)
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Maior Queda</h3>
            <p className="text-sm text-gray-700">
              -70,7% entre 2018 e 2020 (mudança para cargo de Prefeito)
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Recuperação Mais Significativa
            </h3>
            <p className="text-sm text-gray-700">
              +58,1% entre 2020 e 2022 (retorno ao foco estadual)
            </p>
          </div>
          <div className="border-l-4 border-amber-600 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Eleição Vitoriosa
            </h3>
            <p className="text-sm text-gray-700">
              2010 - Deputado Estadual com 4.672 votos (única eleição vencida)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
