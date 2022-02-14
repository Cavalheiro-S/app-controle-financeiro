import { ButtonProps } from "../../common/interface/ButtonProps";

export const Button = ({ text, handleClick }: ButtonProps) => {

    return (
        <button type="submit" className="button button--primary"
            onClick={event => {
                event.preventDefault();
                handleClick();
            }}>
            {text}
        </button>
    )
}