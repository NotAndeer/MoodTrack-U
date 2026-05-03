import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Check } from "lucide-react";

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [goals, setGoals] = useState<string[]>([]);
  const [frequency, setFrequency] = useState("");
  const [notifications, setNotifications] = useState(false);

  const goalOptions = [
    { id: "time", label: "Organizar mi tiempo" },
    { id: "sleep", label: "Dormir mejor" },
    { id: "stress", label: "Reducir estrés" },
    { id: "habits", label: "Crear hábitos saludables" },
    { id: "emotions", label: "Monitorear mis emociones" },
  ];

  const frequencyOptions = [
    { id: "daily", label: "Diario", description: "Seguimiento todos los días" },
    { id: "3times", label: "3 veces por semana", description: "Lunes, miércoles, viernes" },
    { id: "weekly", label: "Semanal", description: "Una vez a la semana" },
  ];

  const toggleGoal = (goalId: string) => {
    setGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/app');
    }
  };

  const canProceed = () => {
    if (step === 1) return goals.length > 0;
    if (step === 2) return frequency !== "";
    return true;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#F7FAFC' }}>
      <div className="w-full max-w-2xl">
        {/* Progress indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    num <= step ? 'text-white' : 'text-gray-400 bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: num <= step ? '#4F8EF7' : undefined,
                  }}
                >
                  {num < step ? <Check className="w-5 h-5" /> : num}
                </div>
                {num < 4 && (
                  <div
                    className="flex-1 h-1 mx-2 transition-all"
                    style={{
                      backgroundColor: num < step ? '#4F8EF7' : '#E5E7EB',
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2">
            <span className="text-xs" style={{ color: '#6B7280' }}>Metas</span>
            <span className="text-xs" style={{ color: '#6B7280' }}>Frecuencia</span>
            <span className="text-xs" style={{ color: '#6B7280' }}>Notificaciones</span>
            <span className="text-xs" style={{ color: '#6B7280' }}>Listo</span>
          </div>
        </div>

        {/* Step 1: Goals */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E5E7EB' }}>
            <h2 className="font-bold mb-3" style={{ fontSize: '28px', color: '#1F2937' }}>
              ¡Hola! Bienvenido a MoodTrack U
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: '#6B7280' }}>
              ¿Qué te gustaría mejorar en tu vida universitaria? Puedes seleccionar varias opciones.
            </p>

            <div className="grid gap-3">
              {goalOptions.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className="p-4 rounded-xl text-left transition-all border-2"
                  style={{
                    backgroundColor: goals.includes(goal.id) ? '#EEF6FF' : '#FFFFFF',
                    borderColor: goals.includes(goal.id) ? '#4F8EF7' : '#E5E7EB',
                    color: '#1F2937',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{goal.label}</span>
                    {goals.includes(goal.id) && (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#4F8EF7' }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Frequency */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E5E7EB' }}>
            <h2 className="font-bold mb-3" style={{ fontSize: '28px', color: '#1F2937' }}>
              ¿Con qué frecuencia quieres hacer seguimiento?
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: '#6B7280' }}>
              Elige la frecuencia que mejor se adapte a tu rutina. Puedes cambiarla después.
            </p>

            <div className="space-y-3">
              {frequencyOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFrequency(option.id)}
                  className="w-full p-5 rounded-xl text-left transition-all border-2"
                  style={{
                    backgroundColor: frequency === option.id ? '#EEF6FF' : '#FFFFFF',
                    borderColor: frequency === option.id ? '#4F8EF7' : '#E5E7EB',
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold" style={{ color: '#1F2937' }}>
                      {option.label}
                    </span>
                    {frequency === option.id && (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#4F8EF7' }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {option.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Notifications */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E5E7EB' }}>
            <h2 className="font-bold mb-3" style={{ fontSize: '28px', color: '#1F2937' }}>
              ¿Quieres recibir recordatorios?
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: '#6B7280' }}>
              Solo las necesarias. Te ayudarán a mantener tu rutina sin sentirte abrumado.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => setNotifications(true)}
                className="w-full p-6 rounded-xl text-left transition-all border-2"
                style={{
                  backgroundColor: notifications ? '#EEF6FF' : '#FFFFFF',
                  borderColor: notifications ? '#4F8EF7' : '#E5E7EB',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold" style={{ fontSize: '18px', color: '#1F2937' }}>
                    Sí, activar recordatorios
                  </span>
                  {notifications && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#4F8EF7' }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Recibirás notificaciones suaves para registrar tu estado emocional y marcar tus hábitos.
                </p>
              </button>

              <button
                onClick={() => setNotifications(false)}
                className="w-full p-6 rounded-xl text-left transition-all border-2"
                style={{
                  backgroundColor: !notifications ? '#EEF6FF' : '#FFFFFF',
                  borderColor: !notifications ? '#4F8EF7' : '#E5E7EB',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold" style={{ fontSize: '18px', color: '#1F2937' }}>
                    No, por ahora
                  </span>
                  {!notifications && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#4F8EF7' }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Puedes activarlas más tarde desde la configuración.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Complete */}
        {step === 4 && (
          <div className="bg-white rounded-2xl p-8 text-center" style={{ border: '1px solid #E5E7EB' }}>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
              }}
            >
              <Check className="w-10 h-10 text-white" />
            </div>

            <h2 className="font-bold mb-3" style={{ fontSize: '28px', color: '#1F2937' }}>
              ¡Todo listo!
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '16px', color: '#6B7280' }}>
              Tu perfil está configurado. Ahora puedes comenzar a registrar tu estado emocional, crear hábitos
              saludables y visualizar tu progreso.
            </p>

            <div
              className="rounded-xl p-6 mb-8 max-w-md mx-auto"
              style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
            >
              <p className="text-sm font-medium mb-4" style={{ color: '#1F2937' }}>
                Recuerda:
              </p>
              <ul className="text-left space-y-2 text-sm" style={{ color: '#6B7280' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4F8EF7' }}>•</span>
                  <span>Registrar tus emociones toma menos de 30 segundos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#7BDCB5' }}>•</span>
                  <span>Pequeñas acciones generan grandes cambios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#B8A1FF' }}>•</span>
                  <span>Tu bienestar también hace parte de tu rendimiento</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 rounded-xl font-medium transition-colors"
              style={{ color: '#6B7280', border: '1px solid #E5E7EB' }}
            >
              Atrás
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-8 py-3 rounded-xl font-semibold text-white transition-all flex items-center gap-2"
            style={{
              backgroundColor: canProceed() ? '#4F8EF7' : '#E5E7EB',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
            }}
          >
            {step === 4 ? 'Ir a mi panel' : 'Continuar'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
