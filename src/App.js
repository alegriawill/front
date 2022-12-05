import './App.css';
import Header from './componentes/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/home/Home';
import Lugar from './componentes/Lugar/Lugar';
import Footer from './componentes/footer/Footer';


function App() {
  return (
    <div className='page-container'>
      <div className='container-wrap'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/viaje/:pais' element={<Lugar />} />
          </Routes>
        </BrowserRouter>
      </div>
          <Footer/>
    </div>

  );
}

export default App;
