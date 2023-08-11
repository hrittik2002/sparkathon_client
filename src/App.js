import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path='/' element={<div>hello</div>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/product' element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
