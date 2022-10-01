import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index';
import Shop from './components/Shop/Shop';
import ItemDetailContainer from './components/Shop/Body/Prendas/containers/ItemDetailContainer';
import ItemCategoryContainer from './components/Shop/Body/Prendas/containers/ItemCategoryContainer';
import Cart from './components/Cart/Cart';
import CarritoApp from './components/Cart/CartContext';
import CheckOut from './components/Cart/CheckOut';
import Success from './components/Cart/Body/Success';


function App() {

  return (
    <CarritoApp>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route exact path='/shop/' element={<Shop/>}/>
          <Route exact path='/shop/prendadetalle/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/shop/categoria/:tamanio' element={<ItemCategoryContainer/>}/>
          <Route exact path='/cart/' element={<Cart/>}/>
          <Route exact path='/checkout/' element={<CheckOut/>}/>
          <Route exact path='/success/' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </CarritoApp>
  );
}

export default App;
