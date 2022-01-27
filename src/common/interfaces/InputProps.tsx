import { TypeProps } from "./FormProps";


interface SelectsProps {
    isSelect: boolean;
    optionsOfSelect:string[];
}

export interface InputProps {
    id: string,
    type: TypeProps,
    placeholder: string,
    select?: SelectsProps,
}