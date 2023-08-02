import HeaderBar from '../../elements/HeaderBar';
import {NavLink} from "react-router-dom";
import React from "react";

export default function RegisterAccountTypePage(props: {}) {
    return (
        <div className="register-page">
            <HeaderBar text="Account Signup"/>
            <div>Choose the type of account you want to have:</div>

            <div className="mt-16">
                {/*<SWCell icon="/icon/lock.png" text="Single party account" to="/registerPwd" shadow={true} />*/}
                <NavLink className="welcome-page-button-container" to='/registerPwd'>
                    <div className="welcome-page-button-text">Single party account</div>
                    <img className="welcome-page-button-icon" src="/icon/arrow-right.png"/>
                </NavLink>
            </div>

            <div className="mt-8">
                {/*<SWCell icon="/icon/lock.png" text="Multi party account" to="/registerPwd" shadow={true} />*/}
                <NavLink className="welcome-page-button-container" to='/registerPwd'>
                    <div className="welcome-page-button-text">Multi party account</div>
                    <img className="welcome-page-button-icon" src="/icon/arrow-right.png"/>
                </NavLink>
            </div>
    </div>
  );
}
