import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;