import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Card from './pages/card/Card';
import Contacts from './pages/contacts/Contacts';
import Main from './pages/main/Main';
import Shop from './pages/shop/Shop';
import ShopItem from './pages/shopItem/ShopItem';

const App = () => {
  
  return (
    <div className="content1">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/showroom' element={<Main />}></Route>
          <Route path='/showroom/shop' element={<Shop />}></Route>
          <Route path='/showroom/shop/:id' element={<ShopItem />}></Route>
          <Route path='/showroom/about' element={<About />}></Route>
          <Route path='/showroom/contacts' element={<Contacts />}></Route>
          <Route path='/showroom/card' element={<Card />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
