import { Lightbulb, AlertCircle, CheckCircle, Coffee, Moon, Activity, BookOpen, Bell } from "lucide-react";

export function Recommendations() {
  const recommendations = [
    {
      type: "warning",
      icon: AlertCircle,
      color: "#F6C85F",
      title: "Has registrado cansancio varios días seguidos",
      description: "Hemos notado que has marcado 'cansado' en 4 de los últimos 7 días. Esto puede ser señal de que necesitas ajustar tu rutina de sueño o incluir más pausas activas durante el día.",
      actions: [
        { label: "Activar recordatorio de sueño", type: "primary" },
        { label: "Agregar rutina de pausas", type: "secondary" },
      ],
    },
    {
      type: "success",
      icon: CheckCircle,
      color: "#34D399",
      title: "Tu hábito de hidratación ha mejorado",
      description: "¡Excelente! Llevas una racha de 12 días tomando suficiente agua. Esto tiene un impacto positivo en tu concentración y energía. Mantén la constancia.",
      actions: [
        { label: "Ver mi progreso", type: "secondary" },
      ],
    },
    {
      type: "info",
      icon: Lightbulb,
      color: "#4F8EF7",
      title: "Podrías beneficiarte de pausas activas",
      description: "Tus sesiones de estudio son largas y productivas, pero notamos que los días sin pausas activas coinciden con mayor cansancio. Intenta incluir 5 minutos de movimiento cada 90 minutos.",
      actions: [
        { label: "Crear rutina de pausas", type: "primary" },
        { label: "Más información", type: "secondary" },
      ],
    },
    {
      type: "suggestion",
      icon: Moon,
      color: "#B8A1FF",
      title: "Desconexión digital antes de dormir",
      description: "Solo el 28% de los días te desconectaste antes de dormir. Esto puede afectar la calidad de tu sueño. Considera activar modo nocturno 30 minutos antes de acostarte.",
      actions: [
        { label: "Activar modo nocturno", type: "primary" },
        { label: "Recordármelo más tarde", type: "secondary" },
      ],
    },
    {
      type: "info",
      icon: Activity,
      color: "#7BDCB5",
      title: "Los jueves registras más estrés",
      description: "Hemos identificado un patrón: los jueves sueles sentirte más estresado. Considera revisar tu carga académica ese día o incluir una actividad relajante al final de la jornada.",
      actions: [
        { label: "Ajustar recordatorios del jueves", type: "secondary" },
      ],
    },
  ];

  const quickActions = [
    { icon: Coffee, label: "Crear rutina de pausas", color: "#7BDCB5" },
    { icon: Moon, label: "Mejorar hábito de sueño", color: "#B8A1FF" },
    { icon: BookOpen, label: "Optimizar sesiones de estudio", color: "#4F8EF7" },
    { icon: Bell, label: "Personalizar recordatorios", color: "#F6C85F" },
  ];

  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Recomendaciones para ti
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Basadas en tus registros y patrones de comportamiento. Recuerda que son sugerencias, no obligaciones.
        </p>
      </div>

      {/* Summary card */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
        }}
      >
        <div className="flex items-center justify-between text-white">
          <div>
            <p className="text-sm opacity-90 mb-1">Recomendaciones activas</p>
            <h2 className="font-bold" style={{ fontSize: '28px' }}>5 sugerencias</h2>
            <p className="text-sm opacity-90 mt-2">
              2 requieren atención, 3 son opcionales
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Lightbulb className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Recommendations list */}
      <div className="space-y-4">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          const bgColor = 
            rec.type === "warning" ? "#FFF9E6" :
            rec.type === "success" ? "#F0FDF4" :
            rec.type === "info" ? "#EEF6FF" :
            "#F5F3FF";

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
              style={{ border: `2px solid ${rec.color}20` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="w-6 h-6" style={{ color: rec.color }} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold" style={{ fontSize: '18px', color: '#1F2937' }}>
                      {rec.title}
                    </h3>
                    {rec.type === "warning" && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${rec.color}20`, color: rec.color }}
                      >
                        Requiere atención
                      </span>
                    )}
                  </div>

                  <p className="mb-4" style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                    {rec.description}
                  </p>

                  <div className="flex gap-3">
                    {rec.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className="px-5 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                        style={{
                          backgroundColor: action.type === "primary" ? rec.color : 'transparent',
                          color: action.type === "primary" ? '#FFFFFF' : rec.color,
                          border: action.type === "secondary" ? `1px solid ${rec.color}40` : 'none',
                        }}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
          Acciones rápidas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl text-left transition-all hover:shadow-md"
                style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: action.color }} />
                </div>
                <span className="font-medium" style={{ color: '#1F2937' }}>
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Understanding recommendations */}
      <div
        className="rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #F3ECFF 100%)',
          border: '1px solid #E5E7EB',
        }}
      >
        <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>
          ¿Cómo funcionan estas recomendaciones?
        </h4>
        <div className="space-y-3 text-sm" style={{ color: '#6B7280' }}>
          <p className="flex items-start gap-2">
            <span style={{ color: '#4F8EF7' }}>•</span>
            <span>
              <strong style={{ color: '#1F2937' }}>Análisis de patrones:</strong> Identificamos tendencias en tus registros emocionales y hábitos para detectar áreas de mejora.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span style={{ color: '#7BDCB5' }}>•</span>
            <span>
              <strong style={{ color: '#1F2937' }}>Alertas tempranas:</strong> Te avisamos cuando detectamos señales de sobrecarga o estrés prolongado.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span style={{ color: '#B8A1FF' }}>•</span>
            <span>
              <strong style={{ color: '#1F2937' }}>Sugerencias personalizadas:</strong> Todas las recomendaciones se basan en tu información y son completamente opcionales.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span style={{ color: '#F6C85F' }}>•</span>
            <span>
              <strong style={{ color: '#1F2937' }}>Sin juicios:</strong> Nuestro objetivo es acompañarte, no presionarte. Tú decides qué acciones tomar.
            </span>
          </p>
        </div>
      </div>

      {/* Privacy note */}
      <div className="bg-white rounded-xl p-5" style={{ border: '1px solid #E5E7EB' }}>
        <p className="text-sm text-center" style={{ color: '#6B7280' }}>
          🔒 Tus datos son privados y solo se usan para generar estas recomendaciones personalizadas.
          Puedes desactivar las sugerencias automáticas en cualquier momento desde tu perfil.
        </p>
      </div>
    </div>
  );
}
