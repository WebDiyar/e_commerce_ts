import ReactDOM from 'react-dom/client'
import './index.css'
import 'swiper/css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './home/Home.tsx';
import Blog from './blog/Blog.tsx';
import Shop from './shop/Shop.tsx';
import SingleProduct from './shop/SingleProduct.tsx';
import CartPage from './shop/CartPage.tsx';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<SingleProduct />} />
        <Route path='/cart-page' element={<CartPage/>} />
      </Route> 
    </Routes>
  </BrowserRouter>
)
