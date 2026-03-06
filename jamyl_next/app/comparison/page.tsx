'use client';

export default function Comparison() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Comparativo 2022</h1>
        <p className="text-gray-500">Análise comparativa - Deputado Estadual 2022 vs 2026</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 border-l-4 border-l-blue-600">
          <p className="text-sm font-medium text-gray-500 mb-2">Votos 2022</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>2.385</h3>
          <p className="text-xs text-gray-400">Deputado Estadual</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 border-l-4 border-l-red-500">
          <p className="text-sm font-medium text-gray-500 mb-2">Votos 2024</p>
          <h3 className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>1.880</h3>
          <p className="text-xs text-red-500">-21,2% (Vereador)</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 border-l-4 border-l-amber-500">
          <p className="text-sm font-medium text-gray-500 mb-2">Mínimo para Eleição</p>
          <h3 className="text-3xl font-bold text-amber-600 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>5.386</h3>
          <p className="text-xs text-amber-500">24º colocado 2022</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 border-l-4 border-l-green-500">
          <p className="text-sm font-medium text-gray-500 mb-2">Gap para Eleição</p>
          <h3 className="text-3xl font-bold text-green-600 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>3.001</h3>
          <p className="text-xs text-green-500">Votos necessários</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>Cenários de Crescimento 2026</h2>
        <div className="space-y-4">
          {[
            { name: 'Conservadora', votes: 3500, growth: 47, color: 'from-amber-400 to-amber-500' },
            { name: 'Realista', votes: 4200, growth: 76, color: 'from-blue-400 to-blue-500' },
            { name: 'Otimista', votes: 5500, growth: 131, color: 'from-green-400 to-green-500' },
          ].map((scenario) => (
            <div key={scenario.name} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-gray-700">{scenario.name}</span>
                <span className="font-bold text-gray-900">{scenario.votes.toLocaleString('pt-BR')} votos (+{scenario.growth}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${scenario.color} h-3 rounded-full transition-all duration-500`} 
                  style={{ width: `${Math.min((scenario.votes / 5386) * 100, 100)}%` }} 
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Meta: 5.386 votos</span>
                <span className="text-xs text-gray-400">{((scenario.votes / 5386) * 100).toFixed(0)}% da meta</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Análise Estratégica</h3>
        <div className="space-y-3 text-sm text-blue-800">
          <p>Para ser eleito Deputado Estadual em 2026, Jamyl precisa de aproximadamente <strong>5.386 votos</strong> (base do 24º colocado em 2022).</p>
          <p>Considerando seus <strong>2.385 votos</strong> em 2022, é necessário um crescimento de <strong>+125,8%</strong> para atingir a meta.</p>
          <p>A recuperação de +24,6% entre 2020 e 2024 demonstra tendência positiva, mas será necessário intensificar significativamente a campanha.</p>
        </div>
      </div>
    </div>
  );
}
