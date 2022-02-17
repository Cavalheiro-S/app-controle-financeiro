// import { Input } from "../Input"
import { Button } from "../Button"
import { FormProps } from "../../common/interface/FormProps.jsx"
import { FabProps, FormControl, MenuItem, Select, TextField } from "@mui/material"


export const Form: React.FC = ( {children}, props : FormProps) => {

    return (
        <form noValidate={false} className="form">
            {
                children
            
               
            }
        </form>

    )

}