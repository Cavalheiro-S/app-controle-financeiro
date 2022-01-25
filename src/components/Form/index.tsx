import { Input } from "../Input"
import { Button } from "../Button"
import { FormProps } from "../../common/interfaces/FormProps.js"

export const Form = ({ inputs, buttons }: FormProps) => {

    return (

        <form className="form">
            {
                inputs.map((input, index) => {
                    return (
                        <Input
                            key={index}
                            id={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            select={input.select} />
                    )
                })
            }
            {
                buttons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            text={button.text}
                            buttonClickedFunction={button.buttonClickedFunction} />)
                })
            }
        </form>



    )

}