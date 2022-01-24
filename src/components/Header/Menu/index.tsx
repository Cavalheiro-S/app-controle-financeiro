import { ItemHeader } from "./Item";
import "./index.css";
import { HeaderProvider } from "../../../common/context/HeaderContext";

type MenuProps  = {
    menuItems: Array<{ name: string, classIcon: string }>;
}

export const MenuHeader = ({ menuItems }: MenuProps) => {


    return (
        <div className="header_section header_section_menu">
            <HeaderProvider>
                <ul className="header_menu">
                    {menuItems.map((item, index) => {
                        return (
                            <ItemHeader
                                key={index}
                                index={index}
                                name={item.name}
                                logoClass={item.classIcon}
                            />
                        )
                    })}
                </ul>
            </HeaderProvider>
        </div>
    )
}