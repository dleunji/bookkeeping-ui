import styled from 'styled-components';

const BannerBlock = styled.div`
	.banner-container {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		img {
			width: 220px;
		}
	}
`;

// TODO: 선택한 결제수단에 따라 배너 URL 변경
const bannerURL = `${process.env.PUBLIC_URL}/images/woori_banner.jpg`;
const Banner = () => {
	return (
		<BannerBlock>
			<div className="banner-container">
				<img src={bannerURL} />
			</div>
		</BannerBlock>
	);
};

export default Banner;
