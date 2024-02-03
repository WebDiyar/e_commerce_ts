import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './home/Home.tsx';
import './index.css'
import 'swiper/css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Blog from './blog/Blog.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={ <Blog/>} />
      </Route> 
    </Routes>
  </BrowserRouter>
)
