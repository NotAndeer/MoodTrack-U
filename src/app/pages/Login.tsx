import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, Mail, Lock } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app');
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
              Bienvenido de nuevo
            </h1>
            <p style={{ fontSize: '16px', color: '#6B7280' }}>
              Inicia sesión para continuar con tu seguimiento
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: '#4F8EF7' }}
                />
                <span style={{ fontSize: '14px', color: '#6B7280' }}>Recordar sesión</span>
              </label>

              <a href="#" style={{ fontSize: '14px', color: '#4F8EF7' }} className="hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#4F8EF7', fontSize: '16px' }}
            >
              Iniciar sesión
            </button>

            <p className="text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
              ¿No tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                style={{ color: '#4F8EF7' }}
                className="font-semibold hover:underline"
              >
                Crear cuenta
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right side - Illustration/Message */}
      <div
        className="hidden lg:flex items-center justify-center p-12"
        style={{
          background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
        }}
      >
        <div className="max-w-md text-white">
          <h2 className="font-bold mb-6" style={{ fontSize: '36px' }}>
            Organiza tu bienestar, un paso a la vez
          </h2>
          <p className="mb-8 opacity-90" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Miles de estudiantes universitarios ya están usando MoodTrack U para mejorar su bienestar mental,
            crear hábitos saludables y alcanzar un mejor equilibrio en su vida académica.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div>
                <p className="font-medium mb-1">Seguimiento emocional simple</p>
                <p className="text-sm opacity-80">Registra tu estado en menos de 30 segundos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div>
                <p className="font-medium mb-1">Hábitos que funcionan</p>
                <p className="text-sm opacity-80">Crea rutinas personalizadas para tu vida</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div>
                <p className="font-medium mb-1">Recomendaciones inteligentes</p>
                <p className="text-sm opacity-80">Recibe insights basados en tus patrones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
