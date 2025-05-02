import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import RootLayout from "./pages/RootLayout";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signUp";
import DashboardLayout from "./pages/DashboardLayout";
import DashBoard from "./components/dashboard/dashboard";
import CreateTasks from "./components/dashboard/CreateTasks";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {/* main layout */}
        <Route path="/" element={<RootLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Dashboard layouts */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="create-tasks" element={<CreateTasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
