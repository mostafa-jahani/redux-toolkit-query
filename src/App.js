import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";
import RouterUser from "./pages/users/Router";
import RouterPost from "./pages/posts/Router";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users/*" element={<RouterUser/>}/>
                        <Route path="/posts/*" element={<RouterPost/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
