import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import { useState } from 'react';
import Login from './components/Login';

function App() {
const [token,setToken] = useState(localStorage.getItem("usrToken") ?? null);

    return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/'
                    element={<Homepage/>}/>
                <Route path='/products'
                    element={token ? <Products/> : <Login token={token} setToken={setToken}/>}/>
            </Routes>
        </Router>

        <Footer/>

    </div>);
}

export default App;
