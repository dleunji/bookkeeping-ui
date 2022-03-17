import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1300px;
  margin: 0rem 3rem;

  @media (max-width: 1300px) {
    width: 768px;
  }

  @media (max-width: 1000px){
    width: 780px;
  }
`;

const Responsive = ({children, ...rest}) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
}

export default Responsive;