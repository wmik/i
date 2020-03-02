import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from './header';
import './layout.css';

const Content = styled.article`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
