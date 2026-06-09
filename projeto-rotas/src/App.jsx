import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Produtos from './pages/Produtos'; // Importar Produtos
import Servicos from './pages/Servicos'; // Importar Serviços
import './App.css';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />   {/* Rota para Produtos */}
        <Route path="/servicos" element={<Servicos />} />   {/* Rota para Serviços */}
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;