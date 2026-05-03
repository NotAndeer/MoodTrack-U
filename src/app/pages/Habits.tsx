import { useState } from "react";
import { Moon, Droplet, Coffee, BookOpen, Activity, Smartphone, Check, Plus } from "lucide-react";

export function Habits() {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly">("daily");
  const [habits, setHabits] = useState([
    { id: 1, icon: Moon, label: "Dormí al menos 7 horas", completed: true, streak: 7, weeklyProgress: 85, color: "#B8A1FF" },
    { id: 2, icon: Droplet, label: "Tomé suficiente agua", completed: true, streak: 12, weeklyProgress: 100, color: "#4F8EF7" },
    { id: 3, icon: Coffee, label: "Hice pausa activa", completed: true, streak: 5, weeklyProgress: 71, color: "#7BDCB5" },
    { id: 4, icon: BookOpen, label: "Estudié sin distracciones", completed: true, streak: 3, weeklyProgress: 57, color: "#F6C85F" },
    { id: 5, icon: Activity, label: "Hice ejercicio breve", completed: false, streak: 0, weeklyProgress: 42, color: "#F28B82" },
    { id: 6, icon: Smartphone, label: "Me desconecté antes de dormir", completed: false, streak: 2, weeklyProgress: 28, color: "#B8A1FF" },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, completed: !h.completed } : h
    ));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Mis hábitos
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Pequeñas acciones generan grandes cambios. Tu progreso se construye día a día.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
          }}
        >
          <p className="text-white text-sm opacity-90 mb-2">Hábitos de hoy</p>
          <p className="text-white font-bold" style={{ fontSize: '32px' }}>
            {completedCount}/{totalCount}
          </p>
          <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#F0FDF4' }}
            >
              <Activity className="w-5 h-5" style={{ color: '#34D399' }} />
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>Racha más larga</p>
          </div>
          <p className="font-bold" style={{ fontSize: '32px', color: '#1F2937' }}>
            12 días
          </p>
          <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Tomar agua</p>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#F5F3FF' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: '#B8A1FF' }} />
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>Promedio semanal</p>
          </div>
          <p className="font-bold" style={{ fontSize: '32px', color: '#1F2937' }}>
            64%
          </p>
          <p className="text-xs mt-1" style={{ color: '#34D399' }}>+12% vs semana anterior</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-1" style={{ border: '1px solid #E5E7EB' }}>
        <button
          onClick={() => setActiveTab("daily")}
          className="flex-1 py-3 px-6 rounded-lg font-medium transition-all"
          style={{
            backgroundColor: activeTab === "daily" ? '#4F8EF7' : 'transparent',
            color: activeTab === "daily" ? '#FFFFFF' : '#6B7280',
          }}
        >
          Diario
        </button>
        <button
          onClick={() => setActiveTab("weekly")}
          className="flex-1 py-3 px-6 rounded-lg font-medium transition-all"
          style={{
            backgroundColor: activeTab === "weekly" ? '#4F8EF7' : 'transparent',
            color: activeTab === "weekly" ? '#FFFFFF' : '#6B7280',
          }}
        >
          Resumen semanal
        </button>
      </div>

      {/* Daily view */}
      {activeTab === "daily" && (
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
              Hábitos de hoy
            </h3>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
              style={{ backgroundColor: '#4F8EF7', color: '#FFFFFF' }}
            >
              <Plus className="w-4 h-4" />
              Agregar hábito
            </button>
          </div>

          <div className="space-y-3">
            {habits.map((habit) => {
              const Icon = habit.icon;
              return (
                <div
                  key={habit.id}
                  className="flex items-center justify-between p-5 rounded-xl transition-all hover:shadow-md"
                  style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${habit.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: habit.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1" style={{ color: '#1F2937' }}>
                        {habit.label}
                      </p>
                      <div className="flex items-center gap-4 text-sm" style={{ color: '#6B7280' }}>
                        <span>Racha: {habit.streak} días</span>
                        <span>•</span>
                        <span>Esta semana: {habit.weeklyProgress}%</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                      habit.completed ? '' : 'hover:border-gray-400'
                    }`}
                    style={{
                      backgroundColor: habit.completed ? '#34D399' : 'transparent',
                      borderColor: habit.completed ? '#34D399' : '#E5E7EB',
                    }}
                  >
                    {habit.completed && <Check className="w-6 h-6 text-white" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Weekly view */}
      {activeTab === "weekly" && (
        <div className="space-y-4">
          {habits.map((habit) => {
            const Icon = habit.icon;
            return (
              <div
                key={habit.id}
                className="bg-white rounded-2xl p-6"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${habit.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: habit.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1" style={{ color: '#1F2937' }}>
                      {habit.label}
                    </p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      Cumplimiento semanal: {habit.weeklyProgress}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold" style={{ fontSize: '24px', color: habit.color }}>
                      {Math.round((habit.weeklyProgress / 100) * 7)}/7
                    </p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>días</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div
                    className="h-3 rounded-full overflow-hidden"
                    style={{ backgroundColor: '#E5E7EB' }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${habit.weeklyProgress}%`,
                        backgroundColor: habit.color,
                      }}
                    ></div>
                  </div>

                  {/* Day markers */}
                  <div className="flex justify-between mt-2">
                    {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => {
                      const dayCompleted = index < Math.round((habit.weeklyProgress / 100) * 7);
                      return (
                        <div key={day} className="flex flex-col items-center">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mb-1"
                            style={{
                              backgroundColor: dayCompleted ? `${habit.color}30` : '#F7FAFC',
                              color: dayCompleted ? habit.color : '#6B7280',
                            }}
                          >
                            {dayCompleted ? <Check className="w-3 h-3" /> : day}
                          </div>
                          <span className="text-xs" style={{ color: '#6B7280' }}>{day}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tips */}
      <div
        className="rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #F0FDF4 100%)',
          border: '1px solid #E5E7EB',
        }}
      >
        <h4 className="font-semibold mb-3" style={{ color: '#1F2937' }}>
          💡 Consejos para mantener tus hábitos
        </h4>
        <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
          <li className="flex items-start gap-2">
            <span style={{ color: '#4F8EF7' }}>•</span>
            <span>Empieza con pocos hábitos y agrégalos gradualmente</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#7BDCB5' }}>•</span>
            <span>Celebra las rachas pequeñas, cada día cuenta</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#B8A1FF' }}>•</span>
            <span>Si fallas un día, no te desanimes. Retoma al día siguiente</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#F6C85F' }}>•</span>
            <span>Vincula hábitos nuevos con rutinas que ya tienes establecidas</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
