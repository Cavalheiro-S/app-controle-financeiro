import { InputProps } from "../../common/interface/InputProps";

export const Input = (props: InputProps) => {

    function changeToSelect() {

        return (
            <input
                id={props.id}
                required
                data-testid = {props.id}
                className="input"
                type={props.type}
                placeholder={props.placeholder} 
                />
        )
    }

    return changeToSelect()
}