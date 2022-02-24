import { Autocomplete, Button, MenuItem, Select, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { ObjectTable } from "../../common/interface"
import { Card } from "../../components/Card"

import Table from "../../components/Table";
import PageModel from "../Investiment/Page-Model"

export const Expense = () => {

    const [itemsOfTable, setItemsOfTable] = useState<ObjectTable[] | null>();

    function updateTable() {
        axios.get<ObjectTable[]>("http://localhost:4000/expense/")
            .then(tableData => setItemsOfTable(tableData.data));
    }

    useEffect(() => {
        updateTable();
        return () => {
            setItemsOfTable(null);
        }
    }, [])

    function AddNewExpense(event: React.FormEvent): void {
        event.preventDefault();
        const expenseModel = new PageModel("inputNameExpense", "inputTypeExpense", "inputValueExpense", "inputDateExpense");
        axios.post("http://localhost:4000/expense/", expenseModel.makeObjectWithValues())
            .then(() => updateTable());

    }

    function removeExpense(id: number) {
        axios.delete(`http://localhost:4000/expense/${id}`)
            .then(() => updateTable());
    }
    return (
        <section className="container__page container__page--flex">

            <Card
                firstLineCard="Adicionando Uma"
                title="Despesa"
                describe="Preencha as informações para adicionar uma nova despesa"
            >
                <form className="form" onSubmit={event => AddNewExpense(event)}>
                    <TextField required fullWidth id="inputNameExpense" label="Nome da Despesa" />
                    <Autocomplete
                        freeSolo
                        fullWidth
                        options={["Alimentação", "Roupa"]}
                        renderInput={(params) =>{
                            return <TextField required {...params} inputProps={{ ...params.inputProps ,id: "inputTypeExpense" }} label="Tipo de Despesa" />}
                        }
                    />
                    <TextField required fullWidth id="inputDateExpense" type="date" />
                    <TextField required fullWidth id="inputValueExpense" type="number" label="Valor da Despesa" />
                    <Button type="submit" classes={{ root: "button" }} fullWidth id="buttonExpense">Adicionar </Button>
                </form>

            </Card>
            <Table
                id="tableExpense"
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={itemsOfTable}
                tableTitle={["Despesas ", "Adicionadas"]}
                removeItemTable={removeExpense}
            />
        </section>
    )
}

