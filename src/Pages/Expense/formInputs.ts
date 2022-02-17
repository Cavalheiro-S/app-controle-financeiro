import { InputProps } from "../../common/interface";

export const expenseInputs: InputProps[] = [
    {
        id: "inputNameExpense",
        type: "text",
        placeholder: "Nome Da Despesa"
    },
    {
        id: "inputTypeExpense",
        type: "text",
        selectOptions: ["Alimentacao", "Livro", "Roupa E Vestuário"],
        placeholder: "Tipo da Despesa"
    },{
        id: "inputDateExpense",
        type: "date",
        placeholder: "Data da despesa"
    },
    {
        id: "inputValueExpense",
        type: "number",
        placeholder: "Valor Da Despesa"
    }
]