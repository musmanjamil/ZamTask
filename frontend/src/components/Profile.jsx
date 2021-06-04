import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
const Profile = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {!loading && (
        <Fragment>
          <h2 className="mt-5 ml-5">My Profile</h2>
          <div className="row wrapper justify-content-around mt-5 user-info">
            <div className="p-4 col-12 col-md-5 shadow-lg">
              <h4>Full Name</h4>
              <p>{user && user.name}</p>

              <h4>Email Address</h4>
              <p>{user && user.email}</p>

              <h4>Joined On</h4>
              <p>{user && String(user.createdAt).substring(0, 10)}</p>

              <Link to="/" onClick={logoutHandler} className="float-right mt-2">
                Logout
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
