import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import MainInfo from "../components/info/MainInfo";
const InfoContainer = () => {
  const { user } = useSelector(({ auth }) => ({
			user: auth.currentUser,
		})
	);
  
  return (
    <MainInfo
      user={user}
    />
  );
}

export default InfoContainer;