import "./index.css";
import { InputProps } from "../../common/interfaces/InputProps";

export const Input = ({ id, type, placeholder, select }: InputProps) => {

    function changeToSelect() {
        if (select) {
            return (
                <select
                    id={id}
                    className="input"
                    placeholder={placeholder}
                >
                    {select.optionsOfSelect.map((option,index) => {
                        return <option key={index} value={option.value}>{option.value}</option>
                    })}
                </select>
            )
        }

        return (
            <input
                id={id}
                className="input"
                type={type}
                placeholder={placeholder} />
        )
    }

    return changeToSelect()
}