import {Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import About from './About'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Login from './Login'
import NoMatch from './NoMatch'

function App() {
  return (
    <>
      <Layout>
        <main>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>  
      </Layout>
    </>
  )
}


export default App
