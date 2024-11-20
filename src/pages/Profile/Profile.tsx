import { useAppSelector } from "@hooks/reduxHooks";

import styles from "./styles.module.css";
const { profile_card } = styles;

const Profile = () => {
  const { user /*accessToken */ } = useAppSelector((state) => state.auth);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className={profile_card}>
        <div className="d-flex flex-column align-items-center ">
          <div style={{ height: "220px", width: "300px" }} className="image  ">
            <img
              src="https://img.freepik.com/free-vector/mysterious-gangster-character_23-2148483453.jpg?t=st=1732081678~exp=1732085278~hmac=df80900b733a9eb4c2000d37fbbed05d88e08da75ee25ba4b23d9fb00c0e47b8&w=740"
              className="rounded w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="ml-3 w-100 text-center p-3">
            <h4 className="mb-1 mt-0  text-capitalize">
              {user?.firstName} {user?.lastName}
            </h4>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
