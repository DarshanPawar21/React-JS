import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./screen/admin.jsx";
import Dashboard from "./screen/dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
