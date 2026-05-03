import { useNavigate } from "react-router";
import { Heart, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";

export function Landing() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Heart,
      title: "Registrar emociones",
      description: "Lleva un seguimiento diario de tu estado emocional de forma rápida y sencilla.",
    },
    {
      icon: CheckCircle,
      title: "Crear hábitos saludables",
      description: "Organiza tu rutina con hábitos que mejoran tu bienestar y rendimiento académico.",
    },
    {
      icon: Shield,
      title: "Detectar señales de sobrecarga",
      description: "Identifica patrones y recibe alertas tempranas cuando necesites hacer una pausa.",
    },
    {
      icon: TrendingUp,
      title: "Ver progreso semanal",
      description: "Visualiza tu evolución con gráficos claros y recomendaciones personalizadas.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Registra cómo te sientes",
      description: "Selecciona tu estado emocional en menos de 30 segundos cada día.",
    },
    {
      number: "02",
      title: "Da seguimiento a tus hábitos",
      description: "Marca hábitos como sueño, hidratación, pausas activas y estudio enfocado.",
    },
    {
      number: "03",
      title: "Recibe recomendaciones",
      description: "Obtén insights personalizados para mejorar tu bienestar día a día.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      program: "Ingeniería de Sistemas",
      text: "MoodTrack U me ayudó a identificar cuándo necesito hacer pausas. Mi productividad mejoró mucho.",
    },
    {
      name: "Carlos Rodríguez",
      program: "Psicología",
      text: "Una herramienta perfecta para estudiantes. Simple, útil y fácil de usar todos los días.",
    },
    {
      name: "Ana Martínez",
      program: "Medicina",
      text: "Me encanta cómo me recuerda cuidar mi bienestar mientras estudio. Es muy necesario.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#4F8EF7' }}
            >
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold" style={{ fontSize: '20px', color: '#4F8EF7' }}>
              MoodTrack U
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium" style={{ color: '#6B7280' }}>
              Beneficios
            </a>
            <a href="#how-it-works" className="text-sm font-medium" style={{ color: '#6B7280' }}>
              Cómo funciona
            </a>
            <a href="#testimonials" className="text-sm font-medium" style={{ color: '#6B7280' }}>
              Testimonios
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2 rounded-lg font-medium text-sm transition-colors"
              style={{ color: '#4F8EF7', border: '1px solid #E5E7EB' }}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-5 py-2 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#4F8EF7' }}
            >
              Comenzar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #EEF6FF 0%, #F3ECFF 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-bold mb-6" style={{ fontSize: '48px', lineHeight: '1.1', color: '#1F2937' }}>
                Cuida tu bienestar mientras organizas tu vida universitaria
              </h1>
              <p className="mb-8" style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.7' }}>
                MoodTrack U es la plataforma diseñada para estudiantes que necesitan registrar su estado emocional,
                crear hábitos saludables y recibir recomendaciones personalizadas sin sentirse abrumados.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/register')}
                  className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: '#4F8EF7', fontSize: '16px' }}
                >
                  Comenzar ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white"
                  style={{ backgroundColor: '#FFFFFF', color: '#4F8EF7', border: '2px solid #4F8EF7', fontSize: '16px' }}
                >
                  Ver demo
                </button>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F28B82' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F6C85F' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
                </div>
                <div className="space-y-4">
                  <div
                    className="rounded-lg p-4"
                    style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)' }}
                  >
                    <p className="text-white font-medium">Tu bienestar hoy</p>
                    <p className="text-white text-sm opacity-90 mt-1">Estado: Calmado</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full mb-2" style={{ backgroundColor: '#7BDCB5' }}></div>
                      <p className="text-xs" style={{ color: '#6B7280' }}>Hábitos cumplidos</p>
                      <p className="font-bold" style={{ color: '#1F2937' }}>4/5</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full mb-2" style={{ backgroundColor: '#B8A1FF' }}></div>
                      <p className="text-xs" style={{ color: '#6B7280' }}>Progreso semanal</p>
                      <p className="font-bold" style={{ color: '#1F2937' }}>85%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: '36px', color: '#1F2937' }}>
              ¿Por qué usar MoodTrack U?
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              Una plataforma completa diseñada específicamente para las necesidades de estudiantes universitarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#EEF6FF' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#4F8EF7' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: '18px', color: '#1F2937' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20" style={{ backgroundColor: '#F7FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: '36px', color: '#1F2937' }}>
              Cómo funciona
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280' }}>
              Tres pasos simples para mejorar tu bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center" style={{ border: '1px solid #E5E7EB' }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold"
                  style={{
                    backgroundColor: index === 0 ? '#4F8EF7' : index === 1 ? '#7BDCB5' : '#B8A1FF',
                    color: '#FFFFFF',
                    fontSize: '24px',
                  }}
                >
                  {step.number}
                </div>
                <h3 className="font-semibold mb-3" style={{ fontSize: '20px', color: '#1F2937' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: '36px', color: '#1F2937' }}>
              Lo que dicen los estudiantes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <p className="mb-6" style={{ fontSize: '15px', color: '#1F2937', lineHeight: '1.7' }}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium"
                    style={{ backgroundColor: '#4F8EF7' }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ fontSize: '14px', color: '#1F2937' }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: '13px', color: '#6B7280' }}>{testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #4F8EF7 0%, #7BDCB5 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4 text-white" style={{ fontSize: '36px' }}>
            Comienza a cuidar tu bienestar hoy
          </h2>
          <p className="mb-8 text-white opacity-90" style={{ fontSize: '18px' }}>
            Únete a cientos de estudiantes que ya están mejorando su vida universitaria
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-10 py-4 bg-white rounded-xl font-semibold transition-all hover:shadow-xl"
            style={{ color: '#4F8EF7', fontSize: '16px' }}
          >
            Crear cuenta gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#4F8EF7' }}
                >
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold" style={{ color: '#4F8EF7' }}>MoodTrack U</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>
                Tu bienestar universitario importa
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#1F2937' }}>Producto</h4>
              <ul className="space-y-2">
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Características</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Precios</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#1F2937' }}>Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Blog</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Guías</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Soporte</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#1F2937' }}>Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Privacidad</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Términos</a></li>
                <li><a href="#" style={{ fontSize: '14px', color: '#6B7280' }}>Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center" style={{ borderColor: '#E5E7EB' }}>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              © 2026 MoodTrack U. Diseñado para el bienestar estudiantil.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
