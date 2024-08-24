import { useAppSelector } from "@hooks/reduxHooks";

const Profile = () => {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  return <div>Profile</div>;
};

export default Profile;
