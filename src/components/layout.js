import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { useThemeUI } from 'theme-ui';

import Header from './header';
import './layout.css';

function getGlobalStyles(props) {
  return css`
    ::-webkit-scrollbar {
      width: 0.5em;
      padding: 1em;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.thumb};
      border-radius: 1em;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props.theme.colors.track};
    }

    html,
    body {
      scrollbar-width: thin;
    }

    blockquote {
      padding: 0.4rem;
      border-left: 2px solid #cccccc;
      background-color: ${props.theme.colors.blockquote};
    }

    a {
      color: ${props.theme.colors.text};
    }
  `;
}

const Content = styled.article`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

function GlobalStyle() {
  let { theme } = useThemeUI();

  return <Global styles={getGlobalStyles({ theme })} />;
}

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
