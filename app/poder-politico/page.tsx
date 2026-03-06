"use client";

export default function PoderPoliticoPage() {
  const politicalGroups = [
    {
      name: "Grupo Progressista",
      influence: "Alta",
      parties: ["PT", "PDT", "PSB"],
      leaders: ["Gladson Cameli (ex-gov)", "Tião Viana"],
      electoralStrength: "Forte em Rio Branco e interior",
      strategy: "Alianças com movimentos sociais",
    },
    {
      name: "Grupo Conservador/Republicano",
      influence: "Alta",
      parties: ["Republicanos", "PL", "PP"],
      leaders: ["Márcio Bittar", "Jarbas Siqueira"],
      electoralStrength: "Distribuído no estado",
      strategy: "Apoio de agronegócio e comércio",
    },
    {
      name: "Grupo Independente",
      influence: "Média",
      parties: ["PSDB", "MDB", "PSD"],
      leaders: ["Vários prefeitos municipais"],
      electoralStrength: "Variável por município",
      strategy: "Negociação caso a caso",
    },
  ];

  const mainLeaders = [
    {
      name: "Gladson Cameli",
      position: "Ex-Governador",
      influence: "Muito Alta",
      party: "Progressista",
    },
    {
      name: "Tião Viana",
      position: "Ex-Senador",
      influence: "Muito Alta",
      party: "PT",
    },
    {
      name: "Márcio Bittar",
      position: "Senador",
      influence: "Muito Alta",
      party: "Republicanos",
    },
    {
      name: "Tiao Bocalom",
      position: "Prefeito Rio Branco",
      influence: "Alta",
      party: "PL",
    },
  ];

  const electoralPresence = [
    {
      party: "Republicanos",
      strength: "Muito Forte",
      regions: "Todo o estado",
    },
    { party: "PT", strength: "Forte", regions: "Rio Branco e interior" },
    { party: "PL", strength: "Forte", regions: "Rio Branco, Cruzeiro do Sul" },
    { party: "PSDB", strength: "Média", regions: "Distribuído" },
    { party: "MDB", strength: "Média", regions: "Distribuído" },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          13. Mapa de Poder Político no Acre
        </h1>
        <p className="text-lg opacity-90">
          Estrutura de poder, lideranças e blocos políticos
        </p>
      </div>

      {/* Grupos Políticos */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          Principais Grupos Políticos
        </h2>
        {politicalGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Influência:{" "}
                  <span
                    className={`font-semibold ${group.influence === "Alta" ? "text-red-600" : "text-amber-600"}`}
                  >
                    {group.influence}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
                  Partidos
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.parties.map((party, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {party}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
                  Lideranças
                </p>
                <p className="text-sm text-gray-700">
                  {group.leaders.join(", ")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">
                  Força Eleitoral
                </p>
                <p className="text-sm text-gray-700">
                  {group.electoralStrength}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">
                  Estratégia
                </p>
                <p className="text-sm text-gray-700">{group.strategy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lideranças Principais */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Lideranças Influentes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Liderança
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Posição
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Partido
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Influência
                </th>
              </tr>
            </thead>
            <tbody>
              {mainLeaders.map((leader, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    {leader.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{leader.position}</td>
                  <td className="px-4 py-3 text-gray-700">{leader.party}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        leader.influence === "Muito Alta"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {leader.influence}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Presença Eleitoral */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Presença Eleitoral por Partido
        </h2>
        <div className="space-y-3">
          {electoralPresence.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
            >
              <div>
                <p className="font-semibold text-gray-900">{item.party}</p>
                <p className="text-xs text-gray-600 mt-1">{item.regions}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.strength === "Muito Forte"
                    ? "bg-red-100 text-red-800"
                    : item.strength === "Forte"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-800"
                }`}
              >
                {item.strength}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Implicações para Candidatura */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Implicações para Candidatura de Jamyl
        </h2>
        <div className="space-y-3 text-sm text-blue-800">
          <p>
            <strong>1. Posicionamento Estratégico:</strong> Jamyl precisa
            definir alinhamento claro com um dos grupos principais ou manter
            independência estratégica.
          </p>
          <p>
            <strong>2. Negociação de Apoios:</strong> Diálogo com lideranças
            influentes é essencial para amplificar votação além da base atual.
          </p>
          <p>
            <strong>3. Coligações:</strong> Possível aliança com partidos de
            médio porte (PSDB, MDB) para expandir presença territorial.
          </p>
          <p>
            <strong>4. Diferenciação:</strong> Necessário propor agenda
            diferenciada dos grupos dominantes para atrair eleitores indecisos.
          </p>
        </div>
      </div>
    </div>
  );
}
