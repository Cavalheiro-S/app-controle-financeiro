import moment from "moment"
import { useContext } from "react"
import { ExpenseContext } from "../../common/context/ExpenseContext"
import { ObjectTable } from "../../common/interface"
import { Card } from "../../components/Card"
import { Form } from "../../components/Form"
import { Table } from "../../components/Table";
import { expenseInputs } from "./formInputs";

export const Expense = () => {

    const expenseContext = useContext(ExpenseContext);

    function removeItemTable(id: number): void {

        const newArrayOfObjetsTable = expenseContext?.objectsTable.filter(
            objectTable => objectTable.id !== id ? objectTable : false
        )
        expenseContext?.setObjectsTable(newArrayOfObjetsTable as ObjectTable[]);
    }


    function handleClick(): void {
        const name = document.querySelector("#inputNameExpense") as HTMLInputElement;
        const type = document.querySelector("#inputTypeExpense") as HTMLInputElement;
        const value = document.querySelector("#inputValueExpense") as HTMLInputElement;
        const date = document.querySelector("inputDateExpense") as HTMLInputElement;

        const objTableData: ObjectTable = {
            id: expenseContext!.idObjectTable,
            name: name.value,
            type: type.value,
            date: date.valueAsDate === null ? moment().format("YYYY-MM-DD") : moment(date.valueAsDate).format("YYYY-MM-DD"),
            value: value.valueAsNumber
        }

        if (value.value === "") {
            value.focus();
            alert("O valor não pode ser deixado vazio");
        }
        else {
            expenseContext?.setValueTotalExpense(expenseContext.valueTotalExpense + objTableData.value);
            expenseContext?.setObjectsTable([...expenseContext.objectsTable, objTableData]);
            expenseContext?.setIdObjectTable(expenseContext.idObjectTable + 1);
        }
    }

    return (
        <section className="container__page container__page--flex">

            <Card
                firstLineCard="Adicionando Uma"
                title="Despesa"
                describe="Preencha as informações para adicionar uma nova despesa"
            >
                <Form
                    inputs={expenseInputs}
                    buttons={[{
                        text: "Adicionar",
                        handleClick: handleClick
                    }]} />
            </Card>
            <Table
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={expenseContext?.objectsTable}
                tableTitle={["Despesas ", "Adicionadas"]}
                removeItemTable={removeItemTable}
            />
        </section>
    )
}

