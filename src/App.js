import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index';
import Shop from './components/Shop/Shop';
import ItemDetailContainer from './components/Shop/Body/Prendas/containers/ItemDetailContainer';
import ItemCategoryContainer from './components/Shop/Body/Prendas/containers/ItemCategoryContainer';
import CartBody from './components/Cart/CartBody';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/shop/' element={<Shop/>}/>
        <Route exact path='/shop/prendadetalle/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/shop/categoria/:size' element={<ItemCategoryContainer/>}/>
        <Route exact path='/carrito/' element={<CartBody/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
