import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Mail, GraduationCap, Bell, Moon, Shield, LogOut, Save } from "lucide-react";

export function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Laura García",
    email: "laura.garcia@universidad.edu",
    program: "Ingeniería de Sistemas",
  });

  const [settings, setSettings] = useState({
    notifications: true,
    dailyReminder: true,
    weeklyReport: true,
    frequency: "daily",
    reminderTime: "09:00",
  });

  const [goals, setGoals] = useState([
    { id: 1, label: "Organizar mi tiempo", active: true },
    { id: 2, label: "Dormir mejor", active: true },
    { id: 3, label: "Reducir estrés", active: true },
    { id: 4, label: "Crear hábitos saludables", active: true },
    { id: 5, label: "Monitorear mis emociones", active: true },
  ]);

  const handleSave = () => {
    alert("Cambios guardados exitosamente");
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
          Perfil y configuración
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Administra tu cuenta, preferencias y metas personales.
        </p>
      </div>

      {/* Profile info */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <div className="flex items-start gap-6 mb-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: '#4F8EF7', fontSize: '32px' }}
          >
            L
          </div>
          <div className="flex-1">
            <h2 className="font-semibold mb-1" style={{ fontSize: '24px', color: '#1F2937' }}>
              {profile.name}
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              Miembro desde marzo 2026
            </p>
            <div className="flex gap-2 mt-3">
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                style={{ backgroundColor: '#4F8EF7', color: '#FFFFFF' }}
              >
                Cambiar foto
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: '#F7FAFC', color: '#6B7280', border: '1px solid #E5E7EB' }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
              <User className="w-4 h-4" />
              Nombre completo
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2"
              style={{
                backgroundColor: '#F7FAFC',
                border: '1px solid #E5E7EB',
                color: '#1F2937',
              }}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
              <Mail className="w-4 h-4" />
              Correo electrónico
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2"
              style={{
                backgroundColor: '#F7FAFC',
                border: '1px solid #E5E7EB',
                color: '#1F2937',
              }}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
              <GraduationCap className="w-4 h-4" />
              Programa académico
            </label>
            <select
              value={profile.program}
              onChange={(e) => setProfile({ ...profile, program: e.target.value })}
              className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2"
              style={{
                backgroundColor: '#F7FAFC',
                border: '1px solid #E5E7EB',
                color: '#1F2937',
              }}
            >
              <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
              <option value="Medicina">Medicina</option>
              <option value="Psicología">Psicología</option>
              <option value="Derecho">Derecho</option>
              <option value="Administración">Administración</option>
              <option value="Diseño">Diseño</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active goals */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-4" style={{ fontSize: '20px', color: '#1F2937' }}>
          Mis metas activas
        </h3>
        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="flex items-center justify-between p-4 rounded-xl"
              style={{ backgroundColor: '#F7FAFC' }}
            >
              <span className="font-medium" style={{ color: '#1F2937' }}>
                {goal.label}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={goal.active}
                  onChange={() => setGoals(goals.map(g => 
                    g.id === goal.id ? { ...g, active: !g.active } : g
                  ))}
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                  style={{
                    backgroundColor: goal.active ? '#4F8EF7' : '#E5E7EB',
                  }}
                ></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Notification settings */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6" style={{ color: '#4F8EF7' }} />
          <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
            Notificaciones
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F7FAFC' }}>
            <div>
              <p className="font-medium mb-1" style={{ color: '#1F2937' }}>
                Recordatorio diario
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Recibe un recordatorio para registrar tu estado emocional
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.dailyReminder}
                onChange={() => setSettings({ ...settings, dailyReminder: !settings.dailyReminder })}
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                style={{
                  backgroundColor: settings.dailyReminder ? '#4F8EF7' : '#E5E7EB',
                }}
              ></div>
            </label>
          </div>

          {settings.dailyReminder && (
            <div className="ml-4 p-4 rounded-xl" style={{ backgroundColor: '#F7FAFC' }}>
              <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                Hora del recordatorio
              </label>
              <input
                type="time"
                value={settings.reminderTime}
                onChange={(e) => setSettings({ ...settings, reminderTime: e.target.value })}
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  color: '#1F2937',
                }}
              />
            </div>
          )}

          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F7FAFC' }}>
            <div>
              <p className="font-medium mb-1" style={{ color: '#1F2937' }}>
                Reporte semanal
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Recibe un resumen de tu progreso cada domingo
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.weeklyReport}
                onChange={() => setSettings({ ...settings, weeklyReport: !settings.weeklyReport })}
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                style={{
                  backgroundColor: settings.weeklyReport ? '#4F8EF7' : '#E5E7EB',
                }}
              ></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F7FAFC' }}>
            <div>
              <p className="font-medium mb-1" style={{ color: '#1F2937' }}>
                Recomendaciones automáticas
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Recibe sugerencias basadas en tus patrones
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => setSettings({ ...settings, notifications: !settings.notifications })}
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                style={{
                  backgroundColor: settings.notifications ? '#4F8EF7' : '#E5E7EB',
                }}
              ></div>
            </label>
          </div>
        </div>
      </div>

      {/* Tracking frequency */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <h3 className="font-semibold mb-4" style={{ fontSize: '20px', color: '#1F2937' }}>
          Frecuencia de seguimiento
        </h3>
        <div className="space-y-2">
          {[
            { value: "daily", label: "Diario", description: "Registro todos los días" },
            { value: "3times", label: "3 veces por semana", description: "Lunes, miércoles, viernes" },
            { value: "weekly", label: "Semanal", description: "Una vez a la semana" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSettings({ ...settings, frequency: option.value })}
              className="w-full p-4 rounded-xl text-left transition-all border-2"
              style={{
                backgroundColor: settings.frequency === option.value ? '#EEF6FF' : '#F7FAFC',
                borderColor: settings.frequency === option.value ? '#4F8EF7' : '#E5E7EB',
              }}
            >
              <p className="font-medium mb-1" style={{ color: '#1F2937' }}>
                {option.label}
              </p>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Privacy and security */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E5E7EB' }}>
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6" style={{ color: '#4F8EF7' }} />
          <h3 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
            Privacidad y seguridad
          </h3>
        </div>
        <div className="space-y-3">
          <button
            className="w-full p-4 rounded-xl text-left transition-colors hover:bg-gray-50"
            style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
          >
            <p className="font-medium" style={{ color: '#1F2937' }}>Cambiar contraseña</p>
          </button>
          <button
            className="w-full p-4 rounded-xl text-left transition-colors hover:bg-gray-50"
            style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
          >
            <p className="font-medium" style={{ color: '#1F2937' }}>Descargar mis datos</p>
          </button>
          <button
            className="w-full p-4 rounded-xl text-left transition-colors hover:bg-gray-50"
            style={{ backgroundColor: '#F7FAFC', border: '1px solid #E5E7EB' }}
          >
            <p className="font-medium" style={{ color: '#1F2937' }}>Eliminar cuenta</p>
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="flex-1 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
          style={{ backgroundColor: '#4F8EF7' }}
        >
          <Save className="w-5 h-5" />
          Guardar cambios
        </button>
        <button
          onClick={handleLogout}
          className="px-6 py-4 rounded-xl font-semibold transition-all hover:bg-gray-100 flex items-center gap-2"
          style={{ backgroundColor: '#F7FAFC', color: '#F28B82', border: '1px solid #E5E7EB' }}
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>

      {/* Info */}
      <div
        className="rounded-xl p-5 text-center"
        style={{ backgroundColor: '#EEF6FF', border: '1px solid #4F8EF740' }}
      >
        <p className="text-sm" style={{ color: '#6B7280' }}>
          🔒 Tus datos están protegidos y nunca serán compartidos con terceros.
        </p>
      </div>
    </div>
  );
}
