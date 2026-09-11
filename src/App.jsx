import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DonorSignUp from "./pages/DonorSignUp";
import HospitalSignUp from "./pages/HospitalSignUp";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/donor" element={<DonorSignUp />} />
        <Route path="/signup/hospital" element={<HospitalSignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;