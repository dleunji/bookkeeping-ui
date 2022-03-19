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
			width: 15rem;
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
`;

const Spacer = styled.div`
	height: 4rem;
`;
const tabs = [
  {
    name: '내역',
    link: '/journal'
  }, 
  {
    name: '기입',
    link: '/entry'
  }, 
  {
    name: '통계',
    link: '/statistics'
  },
  {
    name:'자산',
    link:'/info'
  },
];

const Header = ({ user, onChangeNavTab, navTab }) => {
	return (
		<>
			<HeaderBlock>
				<Wrapper>
					<div className="left">
						(&nbsp;
						<span className="username">
							{' '}
							{user == null ? '?' : user.userFirstName}{' '}
						</span>
						&nbsp;)의 용돈 기입장
					</div>
					<div className="right">
						<div>
							{user && (
								<div className="nav-bar">
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
                      window.open('/charge', '충전','width=530,height=860,location=no,status=no,scrollbars=yes');
                      // 팝업창에서 사용해야하는 데이터 전달
                      // 일정 기간 충전하지 않으면 자동으로 만료되도록 sessionStorage 사용
                      sessionStorage.setItem("userId", user.userId);
                      sessionStorage.setItem("prevBalance", user.balance);

                    }}
                  >
                    충전
                  </div>
								</div>
							)}
						</div>
						<Link to="/users">
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
