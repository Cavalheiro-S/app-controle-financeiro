import { useContext } from "react"
import { ExpenseContext } from "../../../common/context/ExpenseContext"
import { ButtonProps } from "../../../common/interfaces/ButtonProps"
import { TypeProps } from "../../../common/interfaces/FormProps"
import { InputProps } from "../../../common/interfaces/InputProps"
import { ObjectTable } from "../../../common/interfaces/TableProps"
import { Card } from "../../Card"
import { Form } from "../../Form"
import { Table } from "../../Table"


export const Expense = () => {

    const expenseContext = useContext(ExpenseContext);

    const inputsTemp: InputProps[] = [
        {
            id: "inputNameExpense",
            type: TypeProps.text,
            placeholder: "Nome Da Despesa"
        },
        {
            id: "inputTypeExpense",
            type: TypeProps.text,
            select: {
                isSelect: true,
                optionsOfSelect: [
                    { value: "Alimentacao" },
                    { value: "Livro" },
                    { value: "Roupa E Vestuário" }
                ]
            },
            placeholder: "Tipo da Despesa"
        },
        {
            id: "inputValueExpense",
            type: TypeProps.number,
            placeholder: "Valor Da Despesa"
        }
    ]

    const buttonsTemp: ButtonProps[] = [
        {
            text: "Adicionar",
            buttonClickedFunction: buttonClicked
        }]

    function removeItemTable(id: number): void {

        const newArrayOfObjetsTable = expenseContext?.objectsTable.filter(
            objectTable => objectTable.id !== id ? objectTable : false
        )

        expenseContext?.setObjectsTable(newArrayOfObjetsTable as ObjectTable[]);
        
    }

    function buttonClicked(): void {
        const name = document.querySelector("#inputNameExpense") as HTMLInputElement;
        const type = document.querySelector("#inputTypeExpense") as HTMLInputElement;
        const value = document.querySelector("#inputValueExpense") as HTMLInputElement;

        const objTableData: ObjectTable = {
            id: expenseContext!.idObjectTable,
            name: name.value,
            type: type.value,
            value: value.valueAsNumber
        }

        expenseContext?.setObjectsTable([...expenseContext.objectsTable, objTableData]);
        expenseContext?.setIdObjectTable(expenseContext.idObjectTable + 1);
        console.log(expenseContext);


    }

    return (
        <>
            <Table
                titleHead={["Nome", "Tipo", "Valor"]}
                tableData={expenseContext?.objectsTable}
                tableTitle={["Despesas ", "Adicionadas"]}
                removeItemTable={removeItemTable}
            />
            <Card
                firstLineCard="Adicionando Uma"
                title="Despesa"
                describe="Preencha as informações para adicionar uma nova despesa"
            >
                <Form inputs={inputsTemp} buttons={buttonsTemp} />
            </Card>
        </>
    )
}

