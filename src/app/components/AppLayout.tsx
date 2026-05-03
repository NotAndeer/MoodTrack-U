import { Outlet, NavLink, useNavigate } from "react-router";
import { LayoutDashboard, Heart, CheckSquare, TrendingUp, Lightbulb, User, Bell } from "lucide-react";

export function AppLayout() {
  const navigate = useNavigate();

  const navItems = [
    { path: "/app", label: "Dashboard", icon: LayoutDashboard },
    { path: "/app/emotional", label: "Estado emocional", icon: Heart },
    { path: "/app/habits", label: "Hábitos", icon: CheckSquare },
    { path: "/app/progress", label: "Progreso", icon: TrendingUp },
    { path: "/app/recommendations", label: "Recomendaciones", icon: Lightbulb },
    { path: "/app/profile", label: "Perfil", icon: User },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7FAFC' }}>
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r" style={{ borderColor: '#E5E7EB' }}>
        <div className="p-6">
          <h1 className="font-bold" style={{ fontSize: '24px', color: '#4F8EF7' }}>
            MoodTrack U
          </h1>
          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
            Tu bienestar importa
          </p>
        </div>

        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/app"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#4F8EF7' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#6B7280',
                })}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="ml-64">
        {/* Top bar */}
        <header className="bg-white border-b sticky top-0 z-10" style={{ borderColor: '#E5E7EB' }}>
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold" style={{ fontSize: '20px', color: '#1F2937' }}>
                Hola, Laura
              </h2>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Domingo, 15 de Marzo 2026
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
                style={{ backgroundColor: '#4F8EF7' }}
              >
                L
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
