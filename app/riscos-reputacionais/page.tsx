"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export default function RiscoReputacional() {
  const cenariosDano = [
    {
      scenario: "Baixo Impacto",
      votos: 3200,
      percentual: 0.54,
      prejudicado: false,
    },
    {
      scenario: "Impacto Médio",
      votos: 2800,
      percentual: 0.47,
      prejudicado: true,
    },
    {
      scenario: "Alto Impacto",
      votos: 1500,
      percentual: 0.25,
      prejudicado: true,
    },
  ];

  const vulnerabilidades = [
    { nome: "Operação Lares", risco: 9 },
    { nome: "Acusação Conhecimento", risco: 8 },
    { nome: "Documentos Judiciais", risco: 7 },
    { nome: "Mobilidade Partidária", risco: 6 },
    { nome: "Conflito Interesses", risco: 5 },
    { nome: "Fragilidade Política", risco: 6 },
  ];

  const metricas = {
    totalVulnerabilidades: 7,
    riscoCritico: 1,
    riscoAlto: 3,
    riscoMedio: 3,
    riscoMedioGeral: 7.0,
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Análise de Risco Reputacional
        </h1>
        <p className="text-lg opacity-90">
          Jamyl Asfury — Vulnerabilidades e Impacto Eleitoral
        </p>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Risco Crítico</p>
          <p className="text-3xl font-bold text-red-600">
            {metricas.riscoCritico}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Vulnerabilidade de gravidade máxima
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Risco Alto</p>
          <p className="text-3xl font-bold text-orange-600">
            {metricas.riscoAlto}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Vulnerabilidades com alto impacto
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Risco Médio Geral</p>
          <p className="text-3xl font-bold text-yellow-600">
            {metricas.riscoMedioGeral.toFixed(1)}/10
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Média consolidada de risco
          </p>
        </div>
      </div>

      {/* Gráfico de Radar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Radar de Vulnerabilidades
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={vulnerabilidades}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis
              dataKey="nome"
              stroke="#6b7280"
              style={{ fontSize: "12px" }}
            />
            <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="#d1d5db" />
            <Radar
              name="Nível de Risco"
              dataKey="risco"
              stroke="#dc2626"
              fill="#ef4444"
              fillOpacity={0.6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Cenários de Dano */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Cenários de Impacto Eleitoral
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cenariosDano}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="scenario" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="votos" fill="#dc2626" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Análise de Vulnerabilidades */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          Vulnerabilidades Críticas
        </h2>

        {/* Operação Lares - Crítico */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Operação Lares — Fraude Habitacional
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Maior escândalo de corrupção habitacional do Acre. 40 casas
                vendidas ilegalmente, R$ 500 mil movimentados.
              </p>
            </div>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm bg-red-100 text-red-800">
              CRÍTICO
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Gravidade</p>
              <p className="text-red-600 font-bold text-lg">9/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Evidência</p>
              <p className="text-red-600 font-bold text-lg">8/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Impacto Eleitoral</p>
              <p className="text-red-600 font-bold text-lg">9/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Memória Pública</p>
              <p className="text-red-600 font-bold text-lg">9/10</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 font-semibold mb-2">DETALHES</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Deflagrada em 1º de fevereiro de 2016</li>
              <li>• Asfury era Secretário de Habitação</li>
              <li>• Seus diretores foram presos: Daniel Gomes e Marcos Huck</li>
              <li>• Exonerado em maio de 2016</li>
              <li>• Processo arquivado sem julgamento em 2017</li>
            </ul>
          </div>
        </div>

        {/* Acusação de Conhecimento */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Acusação de Conhecimento do Esquema
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Rossandra Lima procurou Asfury em novembro de 2015. Operação
                deflagrada em fevereiro de 2016 (3 meses depois).
              </p>
            </div>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm bg-orange-100 text-orange-800">
              ALTO
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Gravidade</p>
              <p className="text-orange-600 font-bold text-lg">8/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Evidência</p>
              <p className="text-orange-600 font-bold text-lg">7/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Impacto Eleitoral</p>
              <p className="text-orange-600 font-bold text-lg">8/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Memória Pública</p>
              <p className="text-orange-600 font-bold text-lg">8/10</p>
            </div>
          </div>
        </div>

        {/* Menção em Documentos Judiciais */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Menção em Documentos Judiciais
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                TJ-AC menciona Asfury em fraude imobiliária: "fraude em relação
                ao imóvel que Maria Oneti foi executada por Jamyl Asfury".
              </p>
            </div>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm bg-orange-100 text-orange-800">
              ALTO
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Gravidade</p>
              <p className="text-orange-600 font-bold text-lg">7/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Evidência</p>
              <p className="text-orange-600 font-bold text-lg">9/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Impacto Eleitoral</p>
              <p className="text-orange-600 font-bold text-lg">7/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Memória Pública</p>
              <p className="text-orange-600 font-bold text-lg">6/10</p>
            </div>
          </div>
        </div>

        {/* Mobilidade Partidária */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Mobilidade Partidária Excessiva
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                4 partidos em 14 anos: PEN → PSC → REPUBLICANOS → PL.
                Oportunismo político.
              </p>
            </div>
            <span className="px-4 py-2 rounded-lg font-semibold text-sm bg-yellow-100 text-yellow-800">
              MÉDIO
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Gravidade</p>
              <p className="text-yellow-600 font-bold text-lg">5/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Evidência</p>
              <p className="text-yellow-600 font-bold text-lg">6/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Impacto Eleitoral</p>
              <p className="text-yellow-600 font-bold text-lg">7/10</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600 font-semibold">Memória Pública</p>
              <p className="text-yellow-600 font-bold text-lg">5/10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Narrativas de Impacto */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          Narrativas de Alto Impacto
        </h2>

        <div className="bg-red-50 rounded-lg border-l-4 border-red-600 p-6">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            O Secretário do Escândalo
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Jamyl Asfury foi secretário de habitação quando o maior escândalo de
            corrupção habitacional do Acre foi descoberto. Sob sua gestão, 40
            casas destinadas a famílias carentes foram vendidas ilegalmente,
            movimentando R$ 500 mil. Seus próprios diretores foram presos. Ele
            foi exonerado em 2016 e o processo nunca foi julgado.
          </p>
          <p className="text-xs text-gray-600 font-semibold">
            Fundamento: Operação Lares, 2016
          </p>
        </div>

        <div className="bg-orange-50 rounded-lg border-l-4 border-orange-600 p-6">
          <h3 className="text-lg font-bold text-orange-900 mb-2">
            A Absolvição que Não Veio
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Jamyl Asfury diz que não foi condenado. Mas o processo foi arquivado
            sem julgamento — não houve absolvição. Documentos judiciais do TJ-AC
            mencionam seu nome em fraude imobiliária. A dúvida permanece.
          </p>
          <p className="text-xs text-gray-600 font-semibold">
            Fundamento: Decisão da Justiça do Acre, 2017
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-600 p-6">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">
            O Político de Quatro Partidos
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Em 14 anos, Jamyl Asfury mudou de partido quatro vezes: PEN, PSC,
            REPUBLICANOS e PL. Muda conforme o vento político. Não tem convicção
            — tem conveniência.
          </p>
          <p className="text-xs text-gray-600 font-semibold">
            Fundamento: Registros eleitorais TSE
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="border-t border-gray-200 pt-6 pb-2">
        <p className="text-sm text-gray-600">
          Análise de Inteligência Reputacional • Jamyl Asfury • Março de 2026 •
          Classificação:{" "}
          <span className="font-bold text-red-600">ALTO RISCO</span>
        </p>
      </div>
    </div>
  );
}
