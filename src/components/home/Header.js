import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faBars } from '@fortawesome/free-solid-svg-icons/index';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    font-size: 1.4rem;
    font-family: 'Noto Sans Serif KR';
  }
  .right {
    display: flex;
    color: black;
    font-family: 'Noto Sans Serif KR';
    border: none;
    cursor: pointer;
    align-items: center;
    font-size: 1.4rem;
    a {
      color: inherit;
    }
    .nav-bar {
      a {
        text-decoration-line: none;
      }
      font-size: 0.8em;
      display: flex;
      width: 10rem;
      justify-content: space-between;
      margin-right: 2rem;
      .active {
        display: inline;
        cursor: default;
        color: #1976d2;
      }
    }
  }
  .username {
    font-family: 'nanum-middle';
    font-size: 2rem;
  }
  .balance {
    img {
      width: 20px;
      margin-right: 5px;
    }
    margin-right: 20px;
    font-family: 'Lexend';
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;
const tabs = [
  {
    name: '내역',
    link: '/journal',
  },
  {
    name: '기입',
    link: '/entry',
  },
];

const Header = ({ user, onChangeNavTab, navTab, popup }) => {
  const balance = sessionStorage.getItem('prevBalance');
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className='left'>
            (&nbsp;
            <span className='username'> {user == null ? '?' : user.userFirstName} </span>
            &nbsp;)의 용돈 기입장
          </div>
          <div className='right'>
            {balance && (
              <div className='balance'>
                <img src={`${process.env.PUBLIC_URL}/images/capital_3d.png`} />
                {parseInt(balance).toLocaleString()}
              </div>
            )}
            <div>
              {user && (
                <div className='nav-bar'>
                  {tabs.map((tab, idx) => (
                    <Link to={tab.link} key={idx}>
                      <div
                        className={navTab === idx ? 'active' : ''}
                        onClick={() => onChangeNavTab(idx)}
                      >
                        {tab.name}
                      </div>
                    </Link>
                  ))}
                  <div
                    onClick={() => {
                      popup();
                    }}
                  >
                    충전
                  </div>
                </div>
              )}
            </div>
            <Link to='/users'>
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
