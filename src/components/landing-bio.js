import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from './link';

const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 72vh;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

function LandingBio() {
  return (
    <OuterContainer>
      <Container>
        <NameHeader>
          <NavLink to="/about">wmik</NavLink>
        </NameHeader>
      </Container>
    </OuterContainer>
  );
}

export default LandingBio;
