// component to show the header of the app that contains the logo and the title and sign in button if the user is not logged in or the user name and sign out button if the user is logged in using next-auth
import router from "next/router";
import React, { FunctionComponent } from "react";
import style from "styled-jsx/css";
import ThemeToggleButton from "../../atoms/button/ThemeToggleButton";
import GoogleLoginButton from "../login/google";

const Header: FunctionComponent = () => {
  const styles = style`
    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 60px;
      background: #fff;
      border-bottom: 1px solid #eaeaea;
    }
    .header-logo {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .header-logo-img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .header-logo-title {
      font-size: 20px;
      font-weight: bold;
    }
    .header-button {
      height: 45px;
      background: #fff;
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
    .header-button:hover {
      background: #eaeaea;
    }
  `;

  return (
    <>
      <div className="header">
        <div className="header-logo" onClick={() => router.push("/")}>
          <img
            className="header-logo-img"
            src="/images/couplogo.svg"
            alt="Co-up logo"
          />
          <span className="header-logo-title">COUP</span>
        </div>
        <GoogleLoginButton></GoogleLoginButton>
        <ThemeToggleButton></ThemeToggleButton>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Header;
