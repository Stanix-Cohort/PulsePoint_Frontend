import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DonorSignUp from "./pages/DonorSignUp";
import HospitalSignUp from "./pages/HospitalSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/donor" element={<DonorSignUp />} />
        <Route path="/signup/hospital" element={<HospitalSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;