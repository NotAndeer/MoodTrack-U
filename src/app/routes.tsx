import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { EmotionalTracking } from "./pages/EmotionalTracking";
import { Habits } from "./pages/Habits";
import { Progress } from "./pages/Progress";
import { Recommendations } from "./pages/Recommendations";
import { Profile } from "./pages/Profile";
import { AppLayout } from "./components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "emotional",
        element: <EmotionalTracking />,
      },
      {
        path: "habits",
        element: <Habits />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "recommendations",
        element: <Recommendations />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
