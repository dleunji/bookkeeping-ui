import { useEffect } from 'react';
import Home from '../../components/home/Home';
const HomeContainer = () => {
  // 세션 스토리지 초기화
  useEffect(() => {
    sessionStorage.clear();
  });
  return <Home />;
};
export default HomeContainer;
