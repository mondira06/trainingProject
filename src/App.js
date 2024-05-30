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
import WithdrawalStatus from "./Components/Pages/WithdrawalStatus";
import CreateCoupon from "./Components/Pages/CreateCoupon";
import TrxAddress from "./Components/Pages/TrxAddress";
import WingoResult from "./Components/Pages/WingoResult";
import Commission_rates from "./Components/Pages/Commission_rates";
import UPIAddress from "./Components/Pages/UpiAddress";
import GameHistory from "./Components/Pages/Gamehistory";
import K3History from "./Components/Pages/K3History";
import Notification from "./Components/Pages/Notification";
import Withdrawal from "./Components/Pages/ManageWithdrawalRequest";
import UserManage from "./Components/Pages/UserManage";
function App() {
  const location = useLocation();
  const renderNavbar = location.pathname !== "/";
  return (
    <div className="App">
      {renderNavbar && <Navbar />}
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
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
            path={"/notification"}
            element={
              <ProtectedRoute>
                <Notification />
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
      <Routes>
       
        <Route path={"/manage_admin"} element={<ProtectedRoute><ManageUser /></ProtectedRoute>} />
        <Route path={"/website_setting"} element={<ProtectedRoute><AmountSetup /></ProtectedRoute>} />
        <Route path={"/reward_management"} element={<ProtectedRoute><Rewardsystem /></ProtectedRoute>} />
        <Route path={"/winner"} element={<ProtectedRoute><ManageWinner /></ProtectedRoute>} />
        <Route path={"/manage_role"} element={<ProtectedRoute><ManageRole /></ProtectedRoute>} />
        <Route path={"/commission"} element={<ProtectedRoute><Commission_rates /></ProtectedRoute>} />
        <Route path={"/upi"} element={<ProtectedRoute><UPIAddress /></ProtectedRoute>} />
        <Route path={"/game_history"} element={<ProtectedRoute><GameHistory /></ProtectedRoute>} />
        <Route path={"/K3"} element={<ProtectedRoute><K3History/></ProtectedRoute>} />
        <Route path={"/withdrawal_status"} element={<ProtectedRoute><WithdrawalStatus/></ProtectedRoute>} />
        <Route path={"/user_management"} element={<ProtectedRoute><UserManage/></ProtectedRoute>} />
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
        <Route path={"/manage_task"} element={<ProtectedRoute><ManageTask /></ProtectedRoute>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
