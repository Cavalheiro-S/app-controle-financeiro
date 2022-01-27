import { Card } from "../../Card";
import { Form } from "../../Form";
import { TypeProps } from "../../../common/interfaces/FormProps";
import { InputProps } from "../../../common/interfaces/InputProps";
import { ButtonProps } from "../../../common/interfaces/ButtonProps";

export const Signup = () => {

    function buttonClicked() {

    }
    const inputsTemp: InputProps[] = [
        {
            id: "inputFullNameSignup",
            type: TypeProps.text,
            placeholder: "Nome Completo"
        },
        {
            id: "inputEmailSignup",
            type: TypeProps.email,
            placeholder: "E-Mail"
        },
        {
            id: "inputPassSignup",
            type: TypeProps.password,
            placeholder: "Senha"
        },
        {
            id: "inputPassConfirmSignup",
            type: TypeProps.password,
            placeholder: "Confirme a senha"
        }
    ]

    const buttonsTemp: ButtonProps[] = [
        {
            text: "Adicionar",
            buttonClickedFunction: buttonClicked
        }]

    return (
        <section className="container__page signup">
            <Card
                firstLineCard='Adicionando Um'
                title='Cadastro'
                describe='Precisamos de algumas informações para continuar'
            >
                <Form inputs={inputsTemp} buttons={buttonsTemp} />
            </Card>
        </section>
    )

}