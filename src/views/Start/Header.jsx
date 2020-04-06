import React from "react";
import styled from "styled-components";

const TheHeader = styled.header`
  margin-bottom: 2rem;
`;

const Header = () => {
  return (
    <TheHeader>
      <h1>This is a collection of nonsense mostly.</h1>
    </TheHeader>
  );
};

export default Header;
