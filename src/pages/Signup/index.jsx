import { lazy } from "react";

import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";


const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const SignupBlock = lazy(() => import("../../components/SignupBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <SignupBlock></SignupBlock>
      
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="jen.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="angel.svg"
        id="product"
      />
      
    </Container>
  );
};

export default Home;
