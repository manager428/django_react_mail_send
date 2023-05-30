import React from "react";
import {useDispatch} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";

const UserInfo = () => {

  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
             trigger="click">
      <Avatar src={"https://via.placeholder.com/150"}
              className="gx-avatar gx-pointer" alt=""/>
    </Popover>
  )

}

export default UserInfo;
