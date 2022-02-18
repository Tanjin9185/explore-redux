import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductLoading from './components/ProductLoading';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductLoading />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
