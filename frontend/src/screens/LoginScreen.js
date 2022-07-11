import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useLocation } from 'react-router-dom'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  let redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo?.token) {
      if (redirect == '/') {
        navigate(redirect, { replace: true })
      } else {
        redirect = '/' + redirect
        navigate(redirect, { replace: true })
      }
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <br />
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <br />
        <br />
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <br></br>
      <Row className="py-3">
        <Col>
          New Customer?
          <Link to={'/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
