import { Card } from "../../Card";
import { Form } from "../../Form";
import { TypeProps } from "../../../common/interfaces/FormProps";
import { InputProps } from "../../../common/interfaces/InputProps";
import { ButtonProps } from "../../../common/interfaces/ButtonProps";

export const Signup = () => {

    function buttonClicked(){

    }
    const inputsTemp: InputProps[] = [
        {
            id: "inputFullNameSignup",
            type: TypeProps.text,
            placeholder: "Nome Completo"
        },
        {
            id: "inputEmailSignup",
            type: TypeProps.text,
            placeholder: "Nome do Investimento"
        },
        {
            id: "inputPassSignup",
            type: TypeProps.password,
            placeholder: "Nome do Investimento"
        }
    ]

    const buttonsTemp: ButtonProps[] = [
        {
            text: "Adicionar",
            buttonClickedFunction: buttonClicked
        }]
        
    return (
        <Card
            firstLineCard='Adicionando Um'
            title='Cadastro'
            describe='Precisamos de algumas informações para continuar'
        >
            <Form inputs={inputsTemp} buttons={buttonsTemp} />
        </Card>
    )

}