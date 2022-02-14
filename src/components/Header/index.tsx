import { useNavigate } from "react-router-dom";
import { MenuHeader } from "./Menu";
import { menuItems } from "./menuItems";
import {useState} from 'react';
export const Header = () => {

    const navigate = useNavigate();
    const [sideMenuToggle, setSideMenuToggle] = useState(false)

    return (
        <header className="header">
            <div className="header__section header__logo">
                <div
                    onClick={event => navigate("home")}
                    className="header__logo--primary">

                </div>
            </div>
            <MenuHeader classMenu={`header__main`} menuItems={menuItems} />
            <div className="sideMenu">
                <svg
                    onClick={ event => {
                        setSideMenuToggle(!sideMenuToggle);
                    }}
                    className={`sideMenu__svg`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5 27H4.5V24H31.5V27ZM31.5 19.5H4.5V16.5H31.5V19.5ZM31.5 12H18V9H31.5V12Z" fill="#20ab3e" />
                </svg>
                <div className={`sideMenu__header sideMenu__header--${sideMenuToggle ? "active" : "disabled"}`}>
                    <button className="sideMenu__close" onClick={event => setSideMenuToggle(!sideMenuToggle)}>
                        X
                    </button>
                    <MenuHeader classMenu="header__side" menuItems={menuItems} />
                </div>
            </div>

            <div className="header__section header__profile">
                <span
                    className="header__span signup__register"
                    onClick={e => navigate("login")}
                >
                    Conta
                </span>
            </div>
        </header>
    )
}