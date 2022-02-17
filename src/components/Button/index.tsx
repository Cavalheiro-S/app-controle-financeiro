import { ButtonProps } from "../../common/interface/ButtonProps";

export const Button = (props: ButtonProps) => {

    return (
        <button id={props.id} data-testid={props.id} type="submit" className="button button--primary"
            onClick={event => {
                event.preventDefault();
                props.handleClick();
            }}>
            {props.text}
        </button>
    )
}