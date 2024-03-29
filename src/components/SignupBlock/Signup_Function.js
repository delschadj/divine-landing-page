import React, {useRef} from "react"
import {Form, Button, Card} from "react-bootstrap"




function Signup_Function() {
  
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>

        <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" ref={nameRef} required></Form.Control>
          </Form.Group>

          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required></Form.Control>
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required></Form.Control>
          </Form.Group>

          <Form.Group id="password-confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
          </Form.Group>

          <Button classname="w-100 text center" type="submit">Sign Up</Button>


        </Form>
      </Card.Body>
    </Card>

    <div className="w-100 text-center mt-2">
      Already have an account? Log in
    </div>
    </>
  )
}

export default Signup_Function