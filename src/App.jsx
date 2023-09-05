import { useEffect, useState, useRef } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './js/Home'
import About from './js/About'
import Products from './js/Products'
import Cart from './js/Cart'
import Login from './js/Login'
import Footer from './js/Footer'
import NoMatch from './js/NoMatch'
import ProductDetails from './js/ProductDetails'
import ScrollToTop from './js/ScrollToTop'
import data from './js/data'


function App() {

  const cartItems = useRef([]);
  const maxQuantityAllowed = 3;
  const [searchValue, setSearchValue] = useState('');
  const prices = data.map(item => item.price)
  const maxPrice = Math.max(...prices);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [range, setRange] = useState(maxPrice);
  const [allColors, setAllColors] = useState(true);
  const [colorIndex, setColorIndex] = useState(-1);
  const [freeShippingChecked, setFreeShippingChecked] = useState(false);
  const [companyValue, setCompanyValue] = useState('all');
  const [isGrid, setIsGrid] = useState(true);
  const filters = useRef({
    search: searchValue,
    category : 'All',
    company : 'all',
    color : 'all',
    price : maxPrice,
    freeShipping : false,
  })
  
  return (
    <>
      <main>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home cartItems={cartItems} />} />
          <Route path="about" element={<About cartItems={cartItems}  />} />
          <Route path="products">
            <Route index element={<Products 
              cartItems={cartItems}  
              filters={filters} 
              maxPrice={maxPrice} 
              searchValue={searchValue} setSearchValue={setSearchValue} 
              categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} 
              range={range} setRange={setRange}
              allColors={allColors} setAllColors={setAllColors}
              colorIndex={colorIndex} setColorIndex={setColorIndex}
              freeShippingChecked={freeShippingChecked} setFreeShippingChecked={setFreeShippingChecked}
              companyValue={companyValue} setCompanyValue={setCompanyValue}
              isGrid={isGrid} setIsGrid={setIsGrid}
              />} />
            <Route path=":productId" element={<ProductDetails cartItems={cartItems} maxQuantityAllowed={maxQuantityAllowed} />} />
          </Route>
          <Route path="cart" element={<Cart cartItems={cartItems} maxQuantityAllowed={maxQuantityAllowed}/>} />
          <Route path="login" element={<Login cartItems={cartItems}  />} />
          <Route path="*" element={<NoMatch cartItems={cartItems}  />} />
        </Routes>
        <Footer />
      </main>  
    </>
  )
}

export default App
