import { ItemHeader } from "./Item";
import { HeaderProvider } from "../../../common/context/HeaderContext";
import React from "react";

type MenuProps  = {
    menuItems: Array<{ name: string, classIcon: string }>;
    classMenu?: string;

}

export const MenuHeader = (props : MenuProps) => {


    return (
        <div className={`header__section header__menu ${props.classMenu}`}>
            <HeaderProvider>
                <ul className="header__list">
                    {props.menuItems.map((item, index) => {
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