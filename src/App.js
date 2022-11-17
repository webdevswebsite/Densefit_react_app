import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from "./Header";
import Home from './Home';
import About from './About';
import Shop from './Shop';
import ProductsDetails from "./ProductsDetails";
import Blog from './Blog';
import Blogdetails from './Blogdetails';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
import Cart from './Cart';
import Checkout from './Checkout';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import BestsellingHome from './components/BestsellingHome';


function App() {
  return (
    <div className="App">
        <Router>
              <Header/>
              <Routes>
                  <Route exact="true" path="/" element={<Home/>}/>
                  <Route exact="true" path="/about" element={<About/>}/>
                  <Route exact="true" path="/shop" element={<Shop/>}/>
                  <Route exact="true" path="/blog" element={<Blog/>}/>
                  <Route exact="true" path="/blogdetails" element={<Blogdetails/>}/>
                  <Route exact="true" path="/faq" element={<Faq/>}/>
                  <Route exact="true" path="/contact" element={<Contact/>}/>
                  <Route exact="true" path="/productsDetails" element={<ProductsDetails/>}/>
                  <Route exact="true" path="/cart" element={<Cart/>}/>
                  <Route exact="true" path="/checkout" element={<Checkout/>}/>
                  <Route exact="true" path="/bestsellinghome" element={<BestsellingHome/>}/>
              </Routes>
              <Footer/>
        </Router>
    </div>
  );
}

export default App;
