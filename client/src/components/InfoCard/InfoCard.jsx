import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logout } from "../../actions/AuthActions";
import * as UserApi from "../../api/UserRequests.js";

function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const { user } = useSelector((state) => state.authReducer.authData);

  const [profileUser, setProfileUser] = useState({});

  const handleLogOut = () => {
    dispatch(logout());
  };

  
  useEffect(() => {
      const fetchProfileUser = async () => {
        if (profileUser === user._id) {
          setProfileUser(user);
        } else {
          console.log("fetching....");
          const profileUser = await UserApi.getUser(profileUserId);
          setProfileUser(profileUser);
        }
      };
      fetchProfileUser();
  }, [user]);

  console.log(profileUser);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {profileUserId === user._id ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Status:  </b>
        </span>
        <span> {user.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in:  </b>
        </span>
        <span> {user.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at:  </b>
        </span>
        <span> {user.worksAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

export default InfoCard;
