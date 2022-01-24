import { useNavigate } from "react-router-dom";
import "./index.css";
import { MenuHeader } from "./Menu";
export const Header = () => {

    const navigate = useNavigate();
    const menuItems = [
        {
            name: "Dashboard",
            classIcon: ""
        },
        {
            name: "Investimento",
            classIcon: "fas fa-piggy-bank"
        },
        {
            name: "Despesa",
            classIcon: "fas fa-coins"
        }
        
    ]

    return (
        <header className="header_side">
            <div className="header_section header_section_logo">
                <div onClick={event => navigate("home")}
                className="logo primary"></div>
            </div>
            <MenuHeader menuItems={menuItems} />
            <div className="header_section header_section_profile">
                <div className="section_profile_signup">
                    <span
                        className="section_profile_signup_span span_login"
                        onClick={e => navigate("login")}>
                        Logar
                    </span>
                    <span
                        className="section_profile_signup_span span_signup"
                    >
                        Criar Conta
                    </span>
                </div>
            </div>
        </header>
    )
}