import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BcryptPage from "@/pages/BcryptPage";
import HomePage from "@/pages/HomePage";
import { Navbar } from "@/components/Navbar";
import ScryptPage from "@/pages/ScryptPage";

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <div className="max-w-4xl m-auto">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/bcrypt" element={<BcryptPage />} />
          <Route path="/scrypt" element={<ScryptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
