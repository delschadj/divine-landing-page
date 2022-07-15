import { lazy } from "react";


const Container = lazy(() => import("../../common/Container"));

const SignupBlock = lazy(() => import("../../components/SignupBlock"));

const Home = () => {
  return (
    <Container>
      

      <SignupBlock></SignupBlock>
      
      
      
    </Container>
  );
};

export default Home;
