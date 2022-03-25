import { Routes, Route } from 'react-router-dom';
import RegisterContainer from '../containers/registered-account/RegisterContainer';
import LoginContainer from '../containers/registered-account/LoginContainer';

const RegisteredAccountPage = () => {
  return (
    <Routes>
      <Route path='register' element={<RegisterContainer />} />
      <Route path='login' element={<LoginContainer />} />
    </Routes>
  );
};

export default RegisteredAccountPage;
