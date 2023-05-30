import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";


const SubMenu = Menu.SubMenu;

const HorizontalNav = () => {

  const navStyle = useSelector(({settings}) => settings.navStyle);
  const {pathname} = useSelector(({common}) => common);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (

    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="in-built-apps"
               title={<IntlMessages id="sidebar.inBuiltApp"/>}>

        <Menu.Item key="in-built-apps/contacts">
          <Link to="/in-built-apps/contacts"><i className="icon icon-contacts"/><IntlMessages
            id="sidebar.contactsApp"/></Link>
        </Menu.Item>

      </SubMenu>
    </Menu>

  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

