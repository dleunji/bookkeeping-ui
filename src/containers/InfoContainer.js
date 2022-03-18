import { useSelector} from "react-redux";
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