import { Card } from "../../Card";
import { Form } from "../../Form";
import { TypeProps } from "../../../common/interfaces/FormProps";
import { InputProps } from "../../../common/interfaces/InputProps";
import { ButtonProps } from "../../../common/interfaces/ButtonProps";
import { SignupContext, SignupProps } from "../../../common/context/SignupContext";
import { useContext } from "react";
import { Steper } from "../../Steper";

export const Signup = () => {
    const signupContext = useContext(SignupContext);
    function buttonClicked() {
        const name = document.querySelector("#inputFullNameSignup") as HTMLInputElement;
        const email = document.querySelector("#inputEmailSignup") as HTMLInputElement;
        const password = document.querySelector("#inputPassSignup") as HTMLInputElement;
        const passwordConfirm = document.querySelector("#inputPassConfirmSignup") as HTMLInputElement;

        if (password.value !== passwordConfirm.value || password.value === "") {
            alert("A senha tem de ser igual no campo de confirmação");
            passwordConfirm.focus();

        } else {

            const objUserData: SignupProps = {
                name: name.value,
                email: email.value,
                password: password.value
            }

            if (signupContext?.usersData !== undefined) {

                const arrayUsersDataTemp = signupContext.usersData
                arrayUsersDataTemp.push(objUserData);
                signupContext.setUsersData(arrayUsersDataTemp);
            }
        }

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
            <Steper/> 
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