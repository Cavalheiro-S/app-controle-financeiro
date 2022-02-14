import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { SignupContext, SignupProps } from "../../common/context/SignupContext";
import { useContext } from "react";
import { Steper } from "../../components/Steper";
import { signupInputs } from "./formInput";

export const Signup = () => {
    const signupContext = useContext(SignupContext);

    function handleClick() {
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

    return (
        <section className="container__page signup">
            <Steper />
            <Card
                firstLineCard='Adicionando Um'
                title='Cadastro'
                describe='Precisamos de algumas informações para continuar'
            >
                <Form
                    inputs={signupInputs}
                    buttons={[{
                        text: "Adicionar",
                        handleClick: handleClick
                    }]}
                />
            </Card>
        </section>
    )

}