import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

function getStyle(props) {
  return css`
    color: ${props.theme.colors.text};
    margin-left: 40px;
    text-decoration: none;
    display: inline-block;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${props.theme.colors.text};
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `;
}

export const NavLink = styled(Link)`
  ${getStyle}
`;

export const ExternalLink = styled.a`
  ${getStyle}
`;
