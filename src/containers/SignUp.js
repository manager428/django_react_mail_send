import React, {useEffect} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {Link, useHistory} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import {message} from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";

const FormItem = Form.Item;

const SignUp = (props) => {


  const dispatch = useDispatch();
  const history = useHistory();
  const {loader, alertMessage, showMessage, authUser} = useSelector(({auth}) => auth);


  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    dispatch(showAuthLoader());
    dispatch(userSignUp(values));
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src={"https://via.placeholder.com/272x395"} alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")}/>
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">
              <FormItem rules={[{required: true, message: 'Please input your username!'}]} name="Username">
                  <Input placeholder="Username"/>
              </FormItem>

              <FormItem name="email" rules={[{
              required: true, type: 'email', message: 'The input is not valid E-mail!',
              }]}>
                  <Input placeholder="Email"/>
              </FormItem>
              <FormItem name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}>
                  <Input type="password" placeholder="Password"/>
              </FormItem>
              <FormItem  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">Forgot password</Link>
              </FormItem>
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp"/>
                </Button>
                <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                id="app.userAuth.signIn"/></Link>
              </FormItem>
              <div className="gx-flex-row gx-justify-content-between">
                <span>or connect with</span>
                <ul className="gx-social-link">
                  <li>
                    <GoogleOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGoogleSignIn());
                    }}/>
                  </li>
                  <li>
                    <FacebookOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userFacebookSignIn());
                    }}/>
                  </li>
                  <li>
                    <GithubOutlined  onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGithubSignIn());
                    }}/>
                  </li>
                  <li>
                    <TwitterOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userTwitterSignIn());
                    }}/>
                  </li>
                </ul>
              </div>
            </Form>
          </div>
          {loader &&
          <div className="gx-loader-view">
            <CircularProgress/>
          </div>
          }
          {showMessage &&
          message.error(alertMessage)}
        </div>
      </div>
    </div>
  );
};


export default SignUp;
