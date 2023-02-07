import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Shop from './pages/shop/Shop';
import ShopItem from './pages/shopItem/ShopItem';

function App() {
  return (
    <div className="content1">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/shop/:id' element={<ShopItem />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
