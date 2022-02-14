import { TypeEnum } from "../enum/typeEnum";


interface SelectsProps {
    isSelect: boolean;
    optionsOfSelect:string[];
}

export interface InputProps {
    id: string,
    type: TypeEnum,
    placeholder: string,
    select?: SelectsProps,
}