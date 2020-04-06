import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const Wrapper = styled.div`
  color: var(--color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Flexer = styled.div`
  flex: 1;
`;

const Start = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Projects />
        <Flexer />
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Start;
