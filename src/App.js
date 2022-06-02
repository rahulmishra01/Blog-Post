import Navbar from "./Component/navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Copy from "./Component/copy";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/blog" element={<Copy />} />
      </Routes>
    </div>
  );
}

export default App;
