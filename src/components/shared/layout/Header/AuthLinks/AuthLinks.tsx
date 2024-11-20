import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import useBreakpoints from "@hooks/useBreakpoints";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

//icons
import { CgProfile } from "react-icons/cg";
import { LuBaggageClaim } from "react-icons/lu";
import { BiLogOutCircle } from "react-icons/bi";
import { logOut } from "@store/auth/authSlice";

const AuthLinks = () => {
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const windowSize = useBreakpoints();

  return (
    <>
      {accessToken ? (
        <Dropdown
          className={`${
            (windowSize === "sm" || windowSize === "xs") && "mt-2"
          }`}
          title="Dropdown"
          id="nav-dropdown"
        >
          <Dropdown.Toggle
            className="border-0 bg-transparent d-flex align-items-center gap-1 py-1"
            id="dropdown-basic"
          >
            <h3 className="m-0 h6 fw-normal rounded-circle p-2 bg-dark-gray border">
              {user?.firstName[0].toUpperCase()}
              {user?.lastName[0].toUpperCase()}
            </h3>
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={`bg-transparent border-0  ${
              windowSize !== "sm" &&
              windowSize !== "xs" &&
              " translate-middle-x  custom-primary-shadow-sm bg-custom-secondary-dark"
            } `}
          >
            <Dropdown.Item as={Link} to="profile">
              <CgProfile className="mb-1 mx-2" />
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="orders">
              <LuBaggageClaim className="mb-1 mx-2" />
              Orders
            </Dropdown.Item>
            <Dropdown.Divider className="bg-light" />
            <div className="d-flex justify-content-center ">
              <Button
                onClick={() => dispatch(logOut())}
                style={{ width: "calc(100% - 20px)" }}
                variant="danger"
                size="sm"
              >
                <BiLogOutCircle className="fs-5 me-1" />
                Log out
              </Button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
