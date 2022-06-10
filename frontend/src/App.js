import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen  from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
const App=()=> {
  return (
    <>
    <Router>
    <Header></Header>
    <main className='py-3'>
      <Container>
         <Routes> 
          <Route path='/product/:id' element={<ProductScreen></ProductScreen>} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path='/' element={<HomeScreen></HomeScreen>} exact />
        </Routes>
      </Container>
    </main>
    <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
