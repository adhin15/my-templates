import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
