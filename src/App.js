import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import UserPage from "./Components/UserPage";
// import Navbar from "./Components/Navbar"
function App() {
  return (
    <div className="App">
      <SideBar/>
      <UserPage/>
      <Navbar/>
    </div>
  );
}

export default App;
