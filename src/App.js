import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="content1">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
