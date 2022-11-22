import React from "react";
import {
  describe,
  detailed,
  detailLogin,
  isAccount,
} from "../constant/constant";

import "../sass/_login.scss";

const Login = () => {
  const handleSubmitRegister = () => {};
  const handleSubmitLogin = () => {};

  const handleOnChangeRegister = (e) => {
    console.log(e.target.value);
  };

  const handleOnChangeLogin = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="form-control">
          <div className="description">
            <p>{describe}</p>
            <p>{detailed}</p>
          </div>

          <div className="login-1-2 m_r12">
            {/* Register */}
            <form className="content" onSubmit={handleSubmitRegister}>
              <h2>Chưa có tài khoản</h2>
              <p>{detailLogin}</p>
              <div>
                <label>
                  <span className="req">*</span>
                  Email:
                </label>
                <input
                  type="email"
                  maxLength="100"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>
              <div>
                <label>
                  <span className="req">*</span>
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  maxLength="20"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>

              <div>
                <label>
                  <span className="req">*</span>
                  Họ:
                </label>
                <input
                  type="text"
                  maxLength="20"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>

              <div>
                <label>
                  <span className="req">*</span>
                  Tên:
                </label>
                <input
                  type="text"
                  maxLength="20"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>
              <div>
                <label>
                  <span className="req">*</span>
                  Điện thoại:
                </label>
                <input
                  type="text"
                  maxLength="100"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>
              <div>
                <label>
                  <span className="req">*</span>
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  maxLength="200"
                  onChange={(e) => handleOnChangeRegister(e)}
                />
              </div>
              <div className="button">
                <input type="submit" value="Tạo tài khoản" />
              </div>
            </form>
            {/* End Register */}
          </div>
          <div className="login-1-2">
            {/* Login */}
            <form className="content" onSubmit={handleSubmitLogin}>
              <h2>Đã có tài khoản</h2>
              <p>{isAccount}</p>
              <div>
                <label>
                  <span className="req">*</span>
                  Email:
                </label>
                <input
                  type="email"
                  maxLength="100"
                  onChange={(e) => handleOnChangeLogin(e)}
                />
              </div>
              <div>
                <label>
                  <span className="req">*</span>
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  maxLength="20"
                  onChange={(e) => handleOnChangeLogin(e)}
                />
              </div>

              <div className="button">
                <input type="submit" value="Tạo tài khoản" />
              </div>
            </form>
            {/* End Login */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
