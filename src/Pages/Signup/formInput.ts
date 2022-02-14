import { TypeEnum } from "../../common/enum/typeEnum";
import { InputProps } from "../../common/interface";

export const signupInputs: InputProps[] = [
    {
        id: "inputFullNameSignup",
        type: TypeEnum.text,
        placeholder: "Nome Completo"
    },
    {
        id: "inputEmailSignup",
        type: TypeEnum.email,
        placeholder: "E-Mail"
    },
    {
        id: "inputPassSignup",
        type: TypeEnum.password,
        placeholder: "Senha"
    },
    {
        id: "inputPassConfirmSignup",
        type: TypeEnum.password,
        placeholder: "Confirme a senha"
    }
]
