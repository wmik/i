import styled from '@emotion/styled';
import React from 'react';
import { ExternalLink, NavLink } from './link';
import Sfx from './sfx-provider';
import DarkModeToggle from './theme-toggle';
import SoundToggle from './sound-toggle';

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  margin-left: auto;
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
      <Content style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/blog">Blog</NavLink>
        <ExternalLink href="mailto:contact@wmik.me">Contact</ExternalLink>
        <ExternalLink href="https://linkedin.com/in/williemik">
          LinkedIn
        </ExternalLink>
        <ExternalLink href="https://github.com/wmik">Projects</ExternalLink>
        <Sfx.Provider>
          <DarkModeToggle style={{ marginLeft: 24 }} />
          <SoundToggle />
        </Sfx.Provider>
      </Content>
    </SiteHeader>
  );
}

export default Header;
