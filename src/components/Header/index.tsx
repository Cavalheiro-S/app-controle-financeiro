import { useNavigate } from "react-router-dom";
import { MenuHeader } from "./Menu";
import { menuItems } from "./menuItems";
import { useState } from 'react';
export const Header = () => {

    const navigate = useNavigate();
    const [sideMenuToggle, setSideMenuToggle] = useState(false)

    return (
        <header className="header">
            <div className="header__section header__logo">
                <svg className="header__logo--primary" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.6306 20.6433C38.6306 30.8348 30.2807 39.1142 19.9589 39.1142C9.63703 39.1142 1.28711 30.8348 1.28711 20.6433C1.28711 10.4518 9.63703 2.17249 19.9589 2.17249C30.2807 2.17249 38.6306 10.4518 38.6306 20.6433Z" fill="white" stroke="#20AB3E" stroke-width="2" />
                    <rect x="0.707041" y="0.00665724" width="27.4321" height="27.139" rx="4.5" transform="matrix(0.713699 -0.700453 0.700383 0.713767 0.197764 20.9124)" fill="#20AB3E" stroke="#20AB3E" />
                    <ellipse cx="23.2615" cy="20.4153" rx="7.17947" ry="7.18017" fill="white" />
                    <path d="M12.74 25.3735C12.6373 25.3735 12.558 25.3455 12.502 25.2895C12.446 25.2242 12.418 25.1449 12.418 25.0515V15.8955C12.418 15.8022 12.446 15.7275 12.502 15.6715C12.558 15.6062 12.6373 15.5735 12.74 15.5735H13.482C13.5753 15.5735 13.65 15.6062 13.706 15.6715C13.7713 15.7275 13.804 15.8022 13.804 15.8955V25.0515C13.804 25.1449 13.7713 25.2242 13.706 25.2895C13.65 25.3455 13.5753 25.3735 13.482 25.3735H12.74Z" fill="white" />
                    <path d="M19.3681 25.3735C19.2747 25.3735 19.1954 25.3455 19.1301 25.2895C19.0741 25.2242 19.0461 25.1449 19.0461 25.0515V15.9095C19.0461 15.8069 19.0741 15.7275 19.1301 15.6715C19.1954 15.6062 19.2747 15.5735 19.3681 15.5735H20.0681C20.1801 15.5735 20.2641 15.6015 20.3201 15.6575C20.3761 15.7135 20.4087 15.7602 20.4181 15.7975L23.3861 21.4535L26.3681 15.7975C26.3867 15.7602 26.4194 15.7135 26.4661 15.6575C26.5221 15.6015 26.6061 15.5735 26.7181 15.5735H27.4041C27.5067 15.5735 27.5861 15.6062 27.6421 15.6715C27.7074 15.7275 27.7401 15.8069 27.7401 15.9095V25.0515C27.7401 25.1449 27.7074 25.2242 27.6421 25.2895C27.5861 25.3455 27.5067 25.3735 27.4041 25.3735H26.7181C26.6247 25.3735 26.5454 25.3455 26.4801 25.2895C26.4241 25.2242 26.3961 25.1449 26.3961 25.0515V18.1635L24.0581 22.7275C24.0207 22.8209 23.9647 22.8955 23.8901 22.9515C23.8154 22.9982 23.7221 23.0215 23.6101 23.0215H23.1761C23.0547 23.0215 22.9567 22.9982 22.8821 22.9515C22.8167 22.8955 22.7607 22.8209 22.7141 22.7275L20.3761 18.1635V25.0515C20.3761 25.1449 20.3434 25.2242 20.2781 25.2895C20.2221 25.3455 20.1474 25.3735 20.0541 25.3735H19.3681Z" fill="#20AB3E" />
                </svg>
            </div>
            <MenuHeader classMenu={`header__main`} menuItems={menuItems} />
            <div className="sideMenu">
                <svg
                    onClick={event => {
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
                    Bem vindo <br />Lucas Cavalheiro
                </span>
            </div>
        </header>
    )
}