import { Button, TextField, Select, MenuItem } from "@mui/material"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom";
import { Card } from "."

describe("Card component", () => {

    it("should render all inputs on screen", async () => {

        const { findByTestId,findByLabelText, findByDisplayValue, findByText } = render(
            <Card 
                describe="Testing"
                firstLineCard="Test"
                title="TEST"
                children={
                    <form>
                        <TextField label="name"/>
                        <Select defaultValue="Test1">
                            <MenuItem>Test1</MenuItem>
                            <MenuItem>Test2</MenuItem>
                            <MenuItem>Test3</MenuItem>
                        </Select>
                        <TextField data-testid="dateTest" type="date"/>
                        <TextField label="value" type="number"/>
                        <Button>Add</Button>
                    </form>
                }
            />
        )

        expect(await findByLabelText("name")).toBeInTheDocument();
        expect(await findByDisplayValue("Test1")).toBeInTheDocument();
        expect(await findByTestId("dateTest")).toBeInTheDocument();
        expect(await findByLabelText("value")).toBeInTheDocument();
        expect(await findByText("Add")).toBeInTheDocument();
    })

        
        
})