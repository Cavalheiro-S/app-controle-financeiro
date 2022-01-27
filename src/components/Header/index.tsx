import { useNavigate } from "react-router-dom";
import { MenuHeader } from "./Menu";
export const Header = () => {

    const navigate = useNavigate();
    const menuItems = [
        {
            name: "Dashboard",
            classIcon: "home"
        },
        {
            name: "Investimento",
            classIcon: "savings"
        },
        {
            name: "Despesa",
            classIcon: "payment"
        }

    ]

    return (
        <header className="header">
            <div className="header__section header__logo">
                <div
                    onClick={event => navigate("home")}
                    className="header__logo--primary">

                </div>
            </div>
            <MenuHeader menuItems={menuItems} />
            <div className="header__section header__profile">
                <div className="header__signup">
                    <span
                        className="header__span header__login"
                        onClick={e => navigate("login")}>
                        Logar
                    </span>
                    <span
                        className="header__span header__signup"
                    >
                        Criar Conta
                    </span>
                </div>
            </div>
        </header>
    )
}