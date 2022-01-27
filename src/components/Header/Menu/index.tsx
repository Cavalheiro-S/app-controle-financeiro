import { ItemHeader } from "./Item";
import { HeaderProvider } from "../../../common/context/HeaderContext";

type MenuProps  = {
    menuItems: Array<{ name: string, classIcon: string }>;
}

export const MenuHeader = ({ menuItems }: MenuProps) => {


    return (
        <div className="header__section header__menu">
            <HeaderProvider>
                <ul className="header__list">
                    {menuItems.map((item, index) => {
                        return (
                            <ItemHeader
                                key={index}
                                index={index}
                                name={item.name}
                                stringLogo={item.classIcon}
                            />
                        )
                    })}
                </ul>
            </HeaderProvider>
        </div>
    )
}