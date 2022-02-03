import { useState } from "react";
import { ButtonProps } from "../../common/interfaces/ButtonProps";

export const Button = ({ text, buttonClickedFunction }: ButtonProps) => {

    return (
        <button type="submit" className="button button--primary"
            onClick={event => {
                event.preventDefault();
                buttonClickedFunction();
            }}>
            {text}
        </button>
    )
}