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
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import LogOut from "./Components/Pages/LogOut";
import CommissionLevel from "./Components/Pages/CommissionLevel";
import CreateCoupon from "./Components/Pages/CreateCoupon";
import TrxAddress from "./Components/Pages/TrxAddress";
import WingoResult from "./Components/Pages/WingoResult";
function App() {
  const location = useLocation();
  const renderNavbar = location.pathname !== "/login";

  return (
    <div className="App">
      {renderNavbar && <Navbar />}
      <AuthProvider>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route
            path={"/manage_admin"}
            element={
              <ProtectedRoute>
                <ManageUser />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/website_setting"}
            element={
              <ProtectedRoute>
                <AmountSetup />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/reward_management"}
            element={
              <ProtectedRoute>
                <Rewardsystem />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/winner"}
            element={
              <ProtectedRoute>
                <ManageWinner />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/manage_role"}
            element={
              <ProtectedRoute>
                <ManageRole />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/logout"}
            element={
              <ProtectedRoute>
                <LogOut />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/create_coupon"}
            element={
              <ProtectedRoute>
                <CreateCoupon />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/commission_level"}
            element={
              <ProtectedRoute>
                <CommissionLevel />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/trx_address"}
            element={
              <ProtectedRoute>
                <TrxAddress />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/withdrawal_management"}
            element={
              <ProtectedRoute>
                <ManageWithdrawalRequest />
              </ProtectedRoute>
            }
          />
        <Route
            path={"/wingo_result"}
            element={
              <ProtectedRoute>
                <WingoResult/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/manage_task"}
            element={
              <ProtectedRoute>
                <ManageTask />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
