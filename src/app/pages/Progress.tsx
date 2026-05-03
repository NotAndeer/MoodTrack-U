import { TrendingUp, Heart, Calendar, Target } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function Progress() {
  const emotionalData = [
    { date: "11 Mar", value: 3.5, label: "Lun" },
    { date: "12 Mar", value: 4.2, label: "Mar" },
    { date: "13 Mar", value: 3.8, label: "Mié" },
    { date: "14 Mar", value: 4.5, label: "Jue" },
    { date: "15 Mar", value: 4.8, label: "Vie" },
    { date: "16 Mar", value: 4.0, label: "Sáb" },
    { date: "17 Mar", value: 4.6, label: "Dom" },
  ];

  const habitsData = [
    { habit: "Sueño", cumplimiento: 85 },
    { habit: "Agua", cumplimiento: 100 },
    { habit: "Pausas", cumplimiento: 71 },
    { habit: "Estudio", cumplimiento: 57 },
    { habit: "Ejercicio", cumplimiento: 42 },
    { habit: "Desconexión", cumplimiento: 28 },
  ];

  const insights = [
    {
      title: "Días con mejor bienestar",
      description: "Los días con pausas activas coinciden con mejores estados emocionales",
      color: "#7BDCB5",
      icon: Heart,
    },
    {
      title: "Patrón identificado",
      description: "El jueves registraste más cansancio que el promedio. Considera ajustar tu carga ese día",
      color: "#F6C85F",
      icon: Calendar,
    },
    {
      title: "Racha positiva",
      description: "Llevas 7 días consecutivos registrando tu estado emocional. ¡Excelente consistencia!",
      color: "#4F8EF7",
      icon: Target,
    },
  ];

  return (
    <div className="max-w-6xl space-y-6">
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Tu progreso
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Visualiza tu evolución y descubre patrones en tu bienestar.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
          }}
        >
          <p className="text-white text-sm opacity-90 mb-2">Hábitos cumplidos esta semana</p>
          <p className="text-white font-bold mb-1" style={{ fontSize: '36px' }}>
            28/42
          </p>
          <p className="text-white text-sm opacity-90">67% de cumplimiento</p>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#F5F3FF' }}
            >
              <Heart className="w-5 h-5" style={{ color: '#B8A1FF' }} />
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>Promedio emocional</p>
          </div>
          <p className="font-bold mb-1" style={{ fontSize: '36px', color: '#1F2937' }}>4.2/5</p>
          <p className="text-sm" style={{ color: '#34D399' }}>+0.5 vs semana anterior</p>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#F0FDF4' }}
            >
              <TrendingUp className="w-5 h-5" style={{ color: '#34D399' }} />
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>Días con mayor equilibrio</p>
          </div>
          <p className="font-bold mb-1" style={{ fontSize: '36px', color: '#1F2937' }}>5/7</p>
          <p className="text-sm" style={{ color: '#6B7280' }}>días esta semana</p>
        </div>
      </div>

      {/* Emotional evolution chart */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
          Evolución emocional semanal
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={emotionalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="label" 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#E5E7EB"
            />
            <YAxis 
              domain={[0, 5]} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#E5E7EB"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              labelStyle={{ color: '#1F2937', fontWeight: 600 }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4F8EF7" 
              strokeWidth={3}
              dot={{ fill: '#4F8EF7', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Escala: 1 = Muy bajo, 5 = Muy alto
          </p>
        </div>
      </div>

      {/* Habits completion chart */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
          Cumplimiento de hábitos (esta semana)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={habitsData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#E5E7EB"
            />
            <YAxis 
              type="category" 
              dataKey="habit" 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#E5E7EB"
              width={80}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              formatter={(value) => `${value}%`}
            />
            <Bar 
              dataKey="cumplimiento" 
              fill="#7BDCB5" 
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
          Insights automáticos
        </h3>
        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl"
                style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${insight.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: insight.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2" style={{ color: '#1F2937' }}>
                      {insight.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendation based on data */}
      <div
        className="rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #F3ECFF 100%)',
          border: '1px solid #E5E7EB',
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#4F8EF7' }}
          >
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2" style={{ color: '#1F2937' }}>
              Recomendación basada en tus datos
            </h4>
            <p className="mb-4" style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
              Tus hábitos de sueño e hidratación están muy bien. Para mejorar aún más tu bienestar,
              considera aumentar las pausas activas durante tus sesiones de estudio y agregar
              breves momentos de ejercicio. Esto puede ayudarte a reducir el cansancio del jueves.
            </p>
            <button
              className="px-5 py-2 rounded-lg font-medium transition-all hover:shadow-md"
              style={{ backgroundColor: '#4F8EF7', color: '#FFFFFF' }}
            >
              Ver recomendaciones completas
            </button>
          </div>
        </div>
      </div>

      {/* Weekly summary */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
          Resumen de la semana
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium mb-3" style={{ color: '#6B7280' }}>
              Aspectos positivos
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span style={{ color: '#34D399' }}>✓</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  Racha de 7 días consecutivos registrando emociones
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#34D399' }}>✓</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  100% de cumplimiento en hidratación
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#34D399' }}>✓</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  Promedio emocional mejoró 12% respecto a la semana anterior
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3" style={{ color: '#6B7280' }}>
              Áreas de oportunidad
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F6C85F' }}>○</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  Desconexión digital antes de dormir (28%)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F6C85F' }}>○</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  Ejercicio breve (42%)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F6C85F' }}>○</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>
                  Mayor cansancio registrado los jueves
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
