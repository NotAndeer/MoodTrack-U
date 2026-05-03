import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, Mail, Lock, User } from "lucide-react";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    program: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ backgroundColor: '#F7FAFC' }}>
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#4F8EF7' }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold" style={{ fontSize: '24px', color: '#4F8EF7' }}>
                MoodTrack U
              </span>
            </div>

            <h1 className="font-bold mb-2" style={{ fontSize: '32px', color: '#1F2937' }}>
              Crea tu cuenta
            </h1>
            <p style={{ fontSize: '16px', color: '#6B7280' }}>
              Comienza a cuidar tu bienestar universitario hoy
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium" style={{ color: '#1F2937' }}>
                Nombre completo
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: '#6B7280' }}
                />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Laura García"
                  className="w-full pl-11 pr-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    color: '#1F2937',
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium" style={{ color: '#1F2937' }}>
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: '#6B7280' }}
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    color: '#1F2937',
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium" style={{ color: '#1F2937' }}>
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: '#6B7280' }}
                />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    color: '#1F2937',
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium" style={{ color: '#1F2937' }}>
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: '#6B7280' }}
                />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    color: '#1F2937',
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium" style={{ color: '#1F2937' }}>
                Programa académico (opcional)
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  color: formData.program ? '#1F2937' : '#6B7280',
                }}
              >
                <option value="">Selecciona tu programa</option>
                <option value="ingenieria">Ingeniería</option>
                <option value="medicina">Medicina</option>
                <option value="psicologia">Psicología</option>
                <option value="derecho">Derecho</option>
                <option value="administracion">Administración</option>
                <option value="diseño">Diseño</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded"
                  style={{ accentColor: '#4F8EF7' }}
                  required
                />
                <span style={{ fontSize: '14px', color: '#6B7280' }}>
                  Acepto los{' '}
                  <a href="#" style={{ color: '#4F8EF7' }} className="hover:underline">
                    términos y condiciones
                  </a>{' '}
                  y la{' '}
                  <a href="#" style={{ color: '#4F8EF7' }} className="hover:underline">
                    política de privacidad
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#4F8EF7', fontSize: '16px' }}
            >
              Registrarme
            </button>

            <p className="text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
              ¿Ya tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                style={{ color: '#4F8EF7' }}
                className="font-semibold hover:underline"
              >
                Iniciar sesión
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right side - Illustration/Message */}
      <div
        className="hidden lg:flex items-center justify-center p-12"
        style={{
          background: 'linear-gradient(135deg, #7BDCB5 0%, #B8A1FF 100%)',
        }}
      >
        <div className="max-w-md text-white">
          <h2 className="font-bold mb-6" style={{ fontSize: '36px' }}>
            Tu bienestar también hace parte de tu rendimiento
          </h2>
          <p className="mb-8 opacity-90" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Comienza a registrar tu estado emocional, crea hábitos saludables y recibe recomendaciones
            personalizadas para mejorar tu vida universitaria.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="italic mb-4" style={{ fontSize: '16px' }}>
              "MoodTrack U me ayudó a identificar patrones de estrés que no sabía que tenía. Ahora puedo
              actuar antes de sentirme abrumada."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">María González</p>
                <p className="text-sm opacity-80">Estudiante de Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
