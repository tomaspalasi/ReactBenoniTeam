import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import PrendaDetailContainer from './components/Shop/Body/Prendas/containers/PrendaDetailContainer';
import PrendaCategoryContainer from './components/Shop/Body/Prendas/containers/PrendaCategoryContainer';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/shop/' element={<Shop/>}/>
        <Route exact path='/shop/prendadetalle/:id' element={<PrendaDetailContainer/>}/>
        <Route exact path='/shop/categoria/:size' element={<PrendaCategoryContainer/>}/>
        <Route exact path='/carrito/' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
