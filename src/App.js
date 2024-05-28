import Dashboard from "./Components/Pages/Dashboard";
import AmountSetup from "./Components/Pages/AmountSetup";
import ManageRole from "./Components/Pages/ManageRole";
import ManageTask from "./Components/Pages/ManageTask";
import ManageUser from "./Components/Pages/ManageUser";
import ManageWinner from "./Components/Pages/ManageWinnerSettings";
import ManageWithdrawalRequest from "./Components/Pages/ManageWithdrawalRequest";
import Rewardsystem from "./Components/Pages/Rewardsystem";
import Navbar from "./Components/MenuItems/Navbar";
import LoginPage from "./Components/Pages/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./Components/ProtectedRoute";
import LogOut from "./Components/Pages/LogOut";

function App() {
  const location = useLocation();

  // Conditionally render the Navbar based on the current route
  const renderNavbar = location.pathname !== "/login";

  return (
    <div className="App">
      {renderNavbar && <Navbar />}
      <AuthProvider>
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/manage_admin"} element={<ManageUser />} />
        <Route path={"/website_setting"} element={<AmountSetup />} />
        <Route path={"/reward_management"} element={<Rewardsystem />} />
        <Route path={"/winner"} element={<ManageWinner />} />
        <Route path={"/manage_role"} element={<ManageRole />} />
        <Route path={"/logout"} element={<LogOut />} />
        <Route
          path={"/withdrawal_management"}
          element={<ManageWithdrawalRequest />}
        />
         <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
        <Route path={"/manage_task"} element={<ManageTask />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
