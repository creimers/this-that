import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  > a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      Brought to you by{" "}
      <a href="https://superservice-international.com">
        superservice international
      </a>{" "}
      .
    </Wrapper>
  );
};

export default Footer;
