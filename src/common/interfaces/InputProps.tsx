import { TypeProps } from "./FormProps";

interface OptionsSelectProps{
    value:string;
}

interface SelectsProps {
    isSelect: boolean;
    optionsOfSelect:OptionsSelectProps[];
}

export interface InputProps {
    id: string,
    type: TypeProps,
    placeholder: string,
    select?: SelectsProps
}