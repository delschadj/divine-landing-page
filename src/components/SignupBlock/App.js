import Signup_Function from "./Signup_Function";

import { Container } from "react-bootstrap"

const Signup = () => {
  return (
    <>
    <Container 
    className = "d-flex align-items-center justify-content-center"
    style={{ minHeight: "60vh"}}>

    <div className="w-100" style={{maxWidth: "400px"}}></div>
        <Signup_Function></Signup_Function>
    </Container>
      
    </>
  );
};

export default (Signup);