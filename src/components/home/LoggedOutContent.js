import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 20rem;
  }
`;
const LoggedOutContent = () => {
  return (
    <ContentBlock>
      <img src={`${process.env.PUBLIC_URL}/images/savingMoneyBear.png`} />
    </ContentBlock>
  );
};
export default LoggedOutContent;
