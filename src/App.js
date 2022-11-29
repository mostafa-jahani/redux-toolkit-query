import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";
import RouterUser from "./pages/users/Router";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<RouterUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
