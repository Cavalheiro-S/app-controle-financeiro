import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../../../../common/context/HeaderContext";

interface ItemProps {
    index: number;
    name: string;
    logoClass: string;
}


export const ItemHeader = ({index, name, logoClass }: ItemProps) => {

    const item = useContext(HeaderContext);
    const navigate = useNavigate();
    return (
        <li
            className={`header__item ${item.itemActive === index+1 ? "primary" : "disabled"}`}
            
            onClick={event => {
                navigate(name);
                item.setItemActive(index+1);
            }}
        >
            <i className={logoClass}></i>
            <span>{name}</span>
        </li>
    )
}