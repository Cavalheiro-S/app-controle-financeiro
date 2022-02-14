import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../../../../common/context/HeaderContext";

interface ItemProps {
    index: number;
    name: string;
    stringLogo: string;
}


export const ItemHeader = (props : ItemProps) => {

    const item = useContext(HeaderContext);
    const navigate = useNavigate();
    return (
        <li
            className={`header__item ${item.itemActive === props.index+1 ? "primary" : "disabled"}`}
            onClick={event => {
                navigate(props.name);
                item.setItemActive(props.index+1);
            }}
        >
            <span className="material-icons">{props.stringLogo}</span>
            <span>{props.name}</span>
        </li>
    )
}