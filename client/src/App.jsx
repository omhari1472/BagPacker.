import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/signup/SignUp";
import Welcome from "./component/welcome/Welcome";
import LogIn from "./component/login/LogIn";
import Dashboard from "./component/dashboard/Dashboard";
import Map from "./component/map/Map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
