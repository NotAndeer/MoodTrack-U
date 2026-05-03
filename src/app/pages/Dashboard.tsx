import { useNavigate } from "react-router";
import { Smile, Meh, Frown, Heart, ArrowRight, Droplet, Moon, BookOpen, Activity, Coffee } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export function Dashboard() {
  const navigate = useNavigate();

  const emotions = [
    { icon: Heart, label: "Tranquilo", color: "#7BDCB5" },
    { icon: Smile, label: "Motivado", color: "#4F8EF7" },
    { icon: Meh, label: "Cansado", color: "#F6C85F" },
    { icon: Frown, label: "Estresado", color: "#F28B82" },
    { icon: Activity, label: "Ansioso", color: "#B8A1FF" },
  ];

  const habits = [
    { id: 1, icon: Moon, label: "Dormí al menos 7 horas", completed: true, color: "#B8A1FF" },
    { id: 2, icon: Droplet, label: "Tomé suficiente agua", completed: true, color: "#4F8EF7" },
    { id: 3, icon: Coffee, label: "Hice pausa activa", completed: true, color: "#7BDCB5" },
    { id: 4, icon: BookOpen, label: "Estudié sin distracciones", completed: true, color: "#F6C85F" },
    { id: 5, icon: Activity, label: "Hice ejercicio breve", completed: false, color: "#F28B82" },
  ];

  const weeklyData = [
    { day: "Lun", value: 4 },
    { day: "Mar", value: 5 },
    { day: "Mié", value: 3 },
    { day: "Jue", value: 4 },
    { day: "Vie", value: 5 },
    { day: "Sáb", value: 4 },
    { day: "Dom", value: 5 },
  ];

  const reminders = [
    { text: "Has tenido una buena semana. Sigue así 💪", type: "success" },
    { text: "Recuerda tomar agua durante tus sesiones de estudio", type: "info" },
  ];

  const completedHabits = habits.filter(h => h.completed).length;
  const totalHabits = habits.length;
  const completionPercentage = Math.round((completedHabits / totalHabits) * 100);

  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Hola, Laura. Vamos paso a paso.
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Tu bienestar también hace parte de tu rendimiento académico.
        </p>
      </div>

      {/* Main status card */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
        }}
      >
        <div className="flex items-center justify-between text-white">
          <div>
            <p className="text-sm opacity-90 mb-1">Tu bienestar hoy</p>
            <h2 className="font-bold" style={{ fontSize: '28px' }}>Estado: Calmado</h2>
            <p className="text-sm opacity-90 mt-2">
              Has completado {completedHabits} de {totalHabits} hábitos hoy ({completionPercentage}%)
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Emotional tracking */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
              ¿Cómo te sientes hoy?
            </h3>
            <button
              onClick={() => navigate('/app/emotional')}
              className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ color: '#4F8EF7' }}
            >
              Ver más
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {emotions.map((emotion) => {
              const Icon = emotion.icon;
              return (
                <button
                  key={emotion.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => navigate('/app/emotional')}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${emotion.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: emotion.color }} />
                  </div>
                  <span className="text-xs text-center" style={{ color: '#6B7280' }}>
                    {emotion.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: '#EEF6FF' }}
            >
              <Activity className="w-5 h-5" style={{ color: '#4F8EF7' }} />
            </div>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Hábitos cumplidos</p>
            <p className="font-bold" style={{ fontSize: '24px', color: '#1F2937' }}>
              {completedHabits}/{totalHabits}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: '#F0FDF4' }}
            >
              <Heart className="w-5 h-5" style={{ color: '#34D399' }} />
            </div>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Racha actual</p>
            <p className="font-bold" style={{ fontSize: '24px', color: '#1F2937' }}>7 días</p>
          </div>

          <div className="bg-white rounded-2xl p-5 col-span-2" style={{ border: '1px solid #E5E7EB' }}>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: '#F5F3FF' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: '#B8A1FF' }} />
            </div>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Promedio emocional semanal</p>
            <p className="font-bold" style={{ fontSize: '24px', color: '#1F2937' }}>Muy positivo</p>
          </div>
        </div>
      </div>

      {/* Habits today */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
            Hábitos de hoy
          </h3>
          <button
            onClick={() => navigate('/app/habits')}
            className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
            style={{ color: '#4F8EF7' }}
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {habits.map((habit) => {
            const Icon = habit.icon;
            return (
              <div
                key={habit.id}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ backgroundColor: '#F7FAFC' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${habit.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: habit.color }} />
                  </div>
                  <span className="font-medium" style={{ color: '#1F2937' }}>
                    {habit.label}
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    habit.completed ? '' : 'cursor-pointer hover:border-gray-400'
                  }`}
                  style={{
                    backgroundColor: habit.completed ? '#34D399' : 'transparent',
                    borderColor: habit.completed ? '#34D399' : '#E5E7EB',
                  }}
                >
                  {habit.completed && <Activity className="w-4 h-4 text-white" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly progress */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
              Progreso semanal
            </h3>
            <button
              onClick={() => navigate('/app/progress')}
              className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ color: '#4F8EF7' }}
            >
              Ver análisis
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Bar dataKey="value" fill="#4F8EF7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <h3 className="font-semibold mb-6" style={{ fontSize: '20px', color: '#1F2937' }}>
            Recordatorios
          </h3>

          <div className="space-y-4">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: reminder.type === 'success' ? '#F0FDF4' : '#EEF6FF',
                  border: `1px solid ${reminder.type === 'success' ? '#34D399' : '#4F8EF7'}20`,
                }}
              >
                <p style={{ fontSize: '14px', color: '#1F2937' }}>{reminder.text}</p>
              </div>
            ))}

            <button
              onClick={() => navigate('/app/recommendations')}
              className="w-full p-4 rounded-xl font-medium transition-colors hover:bg-gray-100"
              style={{ backgroundColor: '#F7FAFC', color: '#4F8EF7' }}
            >
              Ver todas las recomendaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
