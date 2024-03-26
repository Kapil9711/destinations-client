import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Register } from "./pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={"<h1>home</h1>"} />

          <Route path="/about" element={"<h1>home</h1>"} />
          <Route path="/login" element={"<h1>home</h1>"} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={"<h1>home</h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const url = "https://destination-server-wbpu.onrender.com/";

export default App;
