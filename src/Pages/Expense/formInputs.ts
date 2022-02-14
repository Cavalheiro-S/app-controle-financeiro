import { TypeEnum } from "../../common/enum/typeEnum";
import { InputProps } from "../../common/interface";

export const expenseInputs: InputProps[] = [
    {
        id: "inputNameExpense",
        type: TypeEnum.text,
        placeholder: "Nome Da Despesa"
    },
    {
        id: "inputTypeExpense",
        type: TypeEnum.text,
        select: {
            isSelect: true,
            optionsOfSelect: ["Alimentacao", "Livro", "Roupa E Vestuário"]
        },
        placeholder: "Tipo da Despesa"
    },{
        id: "inputDateExpense",
        type: TypeEnum.date,
        placeholder: "Data da despesa"
    },
    {
        id: "inputValueExpense",
        type: TypeEnum.number,
        placeholder: "Valor Da Despesa"
    }
]