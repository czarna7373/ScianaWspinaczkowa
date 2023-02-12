import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Footer } from "./components/footer/footer";
import { Products } from "./pages/products/products";
import { Homepage } from './pages/homepage/homepage';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

function App() {
    
    return (<div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/'
                    element={<Homepage/>}/>
                <Route exact path='/shop'
                    element={<Shop/>}/>
                <Route path='/products'
                    element={<Products/>}/>
                <Route exact path='/login'
                    element={<Login/>}/>
                <Route exact path='/cart'
                    element={<Cart/>}/>
            </Routes>
        </Router>
        <Footer/>

    </div>);
}

export default App;
