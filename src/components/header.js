import styled from '@emotion/styled';
import React from 'react';
import { ExternalLink, NavLink } from './link';

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: 40px;
`;

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`;

function Header() {
  return (
    <SiteHeader>
      <Content>
        <p>
          <NavLink to="/blog">Blog</NavLink>
          <ExternalLink href="https://github.com/wmik">Projects</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/williemik">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="mailto:contact@wmik.me">Contact</ExternalLink>
        </p>
      </Content>
    </SiteHeader>
  );
}

export default Header;
