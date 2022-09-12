import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/index' element={<Index/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/carrito' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
