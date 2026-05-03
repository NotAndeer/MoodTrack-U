import { useState } from "react";
import { Smile, Meh, Frown, Heart, Activity, Calendar } from "lucide-react";

export function EmotionalTracking() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(3);
  const [note, setNote] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const emotions = [
    { id: "calm", icon: Heart, label: "Tranquilo", color: "#7BDCB5", description: "Me siento en paz y equilibrado" },
    { id: "motivated", icon: Smile, label: "Motivado", color: "#4F8EF7", description: "Tengo energía y ganas de hacer cosas" },
    { id: "tired", icon: Meh, label: "Cansado", color: "#F6C85F", description: "Me siento agotado o con poca energía" },
    { id: "stressed", icon: Frown, label: "Estresado", color: "#F28B82", description: "Siento presión o sobrecarga" },
    { id: "anxious", icon: Activity, label: "Ansioso", color: "#B8A1FF", description: "Siento inquietud o preocupación" },
  ];

  const recentEntries = [
    { date: "Hoy, 10:30 AM", emotion: "Motivado", intensity: 4, color: "#4F8EF7" },
    { date: "Ayer, 2:15 PM", emotion: "Tranquilo", intensity: 5, color: "#7BDCB5" },
    { date: "Ayer, 9:00 AM", emotion: "Cansado", intensity: 3, color: "#F6C85F" },
    { date: "16 Mar, 3:45 PM", emotion: "Motivado", intensity: 5, color: "#4F8EF7" },
    { date: "16 Mar, 10:00 AM", emotion: "Tranquilo", intensity: 4, color: "#7BDCB5" },
  ];

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedEmotion(null);
      setIntensity(3);
      setNote("");
    }, 2000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Registro emocional
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Registrar tus emociones toma menos de 30 segundos y te ayuda a identificar patrones.
        </p>
      </div>

      {/* Success message */}
      {showSuccess && (
        <div
          className="rounded-xl p-4 animate-pulse"
          style={{ backgroundColor: '#F0FDF4', border: '1px solid #34D399' }}
        >
          <p className="font-medium text-center" style={{ color: '#1F2937' }}>
            ✓ Registro guardado exitosamente
          </p>
        </div>
      )}

      {/* Main form */}
      <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E5E7EB' }}>
        <h2 className="font-semibold mb-6" style={{ fontSize: '24px', color: '#1F2937' }}>
          ¿Cómo te sientes en este momento?
        </h2>

        {/* Emotion selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {emotions.map((emotion) => {
            const Icon = emotion.icon;
            const isSelected = selectedEmotion === emotion.id;
            return (
              <button
                key={emotion.id}
                onClick={() => setSelectedEmotion(emotion.id)}
                className="p-5 rounded-xl text-left transition-all border-2"
                style={{
                  backgroundColor: isSelected ? `${emotion.color}15` : '#FFFFFF',
                  borderColor: isSelected ? emotion.color : '#E5E7EB',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${emotion.color}25` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: emotion.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1" style={{ color: '#1F2937' }}>
                      {emotion.label}
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  {emotion.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Intensity slider */}
        {selectedEmotion && (
          <div className="mb-8">
            <label className="block font-medium mb-4" style={{ color: '#1F2937' }}>
              ¿Qué tan intenso es este sentimiento?
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="5"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4F8EF7 0%, #4F8EF7 ${((intensity - 1) / 4) * 100}%, #E5E7EB ${((intensity - 1) / 4) * 100}%, #E5E7EB 100%)`,
                }}
              />
              <div className="flex justify-between text-sm" style={{ color: '#6B7280' }}>
                <span>Muy leve</span>
                <span className="font-semibold" style={{ color: '#4F8EF7' }}>Nivel {intensity}</span>
                <span>Muy intenso</span>
              </div>
            </div>
          </div>
        )}

        {/* Optional note */}
        {selectedEmotion && (
          <div className="mb-8">
            <label className="block font-medium mb-3" style={{ color: '#1F2937' }}>
              ¿Quieres agregar una nota? (opcional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Por ejemplo: Tengo un examen importante mañana..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2"
              style={{
                backgroundColor: '#F7FAFC',
                border: '1px solid #E5E7EB',
                color: '#1F2937',
              }}
            />
            <p className="text-xs mt-2" style={{ color: '#6B7280' }}>
              Las notas te ayudan a recordar el contexto cuando veas tu historial.
            </p>
          </div>
        )}

        {/* Save button */}
        {selectedEmotion && (
          <button
            onClick={handleSave}
            className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: '#4F8EF7', fontSize: '16px' }}
          >
            Guardar registro
          </button>
        )}

        {!selectedEmotion && (
          <div
            className="p-6 rounded-xl text-center"
            style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
          >
            <p style={{ color: '#6B7280' }}>
              Selecciona una emoción para continuar con tu registro
            </p>
          </div>
        )}
      </div>

      {/* Recent entries */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6" style={{ color: '#4F8EF7' }} />
          <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
            Historial reciente
          </h3>
        </div>

        <div className="space-y-3">
          {recentEntries.map((entry, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl"
              style={{ backgroundColor: '#F7FAFC' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div>
                  <p className="font-medium" style={{ color: '#1F2937' }}>
                    {entry.emotion}
                  </p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {entry.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i < entry.intensity ? entry.color : '#E5E7EB',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info card */}
      <div
        className="rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #F3ECFF 100%)',
          border: '1px solid #E5E7EB',
        }}
      >
        <h4 className="font-semibold mb-3" style={{ color: '#1F2937' }}>
          💡 ¿Por qué es importante registrar tus emociones?
        </h4>
        <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
          <li className="flex items-start gap-2">
            <span style={{ color: '#4F8EF7' }}>•</span>
            <span>Te ayuda a identificar patrones emocionales relacionados con tu rutina académica</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#7BDCB5' }}>•</span>
            <span>Facilita la detección temprana de señales de estrés o sobrecarga</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#B8A1FF' }}>•</span>
            <span>Permite visualizar tu progreso y cómo mejoran tus hábitos tu bienestar</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
