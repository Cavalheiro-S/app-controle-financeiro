import { TypeEnum } from "../../common/enum/typeEnum"
import { InputProps } from "../../common/interface/InputProps"

export const inputsInvestiment: InputProps[] = [
    {
        id: "inputNameInvestiment",
        type: TypeEnum.text,
        placeholder: "Nome do Investimento"
    },
    {
        id: "inputTypeInvestiment",
        type: TypeEnum.text,
        placeholder: "Tipo do Investimento",
        select: {
            isSelect: true,
            optionsOfSelect: ["Renda Variável", "Renda Fixa", "Outro"]
        }
    },
    {
        id: "inputDateInvestiment",
        type: TypeEnum.date,
        placeholder: "Data do Investimento"
    },
    {
        id: "inputValueInvestiment",
        type: TypeEnum.number,
        placeholder: "Valor do Investimento"
    }
]