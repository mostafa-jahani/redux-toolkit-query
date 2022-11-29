import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";
import IndexUser from "./pages/Index";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<IndexUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
