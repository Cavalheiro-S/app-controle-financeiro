import { ButtonProps } from "./ButtonProps";
import { InputProps } from "./InputProps";

export interface FormProps{
    inputs: InputProps[],
    buttons: ButtonProps[]
}


export enum TypeProps{
    text = "text",
    password = "password",
    number = "number"

}