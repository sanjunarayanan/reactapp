import React,{useEffect} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
  const dispatch = useDispatch()

  // we need to use the useSelector() hook for get the productlist from the store..
  const productList = useSelector((state) => state.productList)
  const { loading, error,products} = productList

  useEffect(()=>{

    dispatch(listProducts())  
    
  },[dispatch])

  return (
    <>
     <h1>Latest Products</h1>
     {loading? <Loader />:error?<h2><Message variant='danger'>{error}</Message></h2>:
     
     <Row>
       {products.map(product=>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
         </Col>
       ))}
     </Row>}
    </>
  )
}

export default HomeScreen