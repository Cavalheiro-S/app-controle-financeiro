import { Card } from "../../components/Card";
import Table from "../../components/Table";
import { ObjectTable } from "../../common/interface";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import PageModel from "./Page-Model";
import moment from "moment";

const Investiment = () => {

    const [itemsOfTable, setItemsOfTable] = useState<ObjectTable[] | null>();

    function updateTable() {
        axios.get<ObjectTable[]>("http://localhost:4000/investiment/")
            .then(tableData => setItemsOfTable(tableData.data));
    }

    useEffect(() => {
        updateTable();
    }, [])

    function AddNewInvestiment(event:React.FormEvent): void {
        event.preventDefault();
        const investimentModel = new PageModel("inputNameInvestiment","inputTypeInvestiment","inputValueInvestiment", "inputDateInvestiment");
        axios.post("http://localhost:4000/investiment/", investimentModel.makeObjectWithValues())
            .then(() => updateTable());

    }

    function removeInvestiment(id: number) {
        axios.delete(`http://localhost:4000/investiment/${id}`)
            .then(() => updateTable());
    }

    return (
        <section className="container__page container__page--flex">

            <Card
                firstLineCard="Adicionando Um"
                title="Investimento"
                describe="Preencha as informações para adicionar uma nova investimento"
            >
                <form className="form" onSubmit={event => AddNewInvestiment(event)}>
                    <TextField required fullWidth id="inputNameInvestiment" label="Nome do Investimento" />
                    <Select defaultValue="Renda Variavel" fullWidth id="inputTypeInvestiment">
                        <MenuItem value="Renda Variavel">Renda Variavel</MenuItem>
                        <MenuItem value="Renda Fixa">Renda Fixa</MenuItem>
                        <MenuItem value="outros">Outros</MenuItem>
                    </Select>
                    <TextField required fullWidth id="inputDateInvestiment" type="date"/>
                    <TextField required fullWidth id="inputValueInvestiment" type="number" label="Valor do Investimento" />
                    <Button type="submit" classes={{ root: "button" }} fullWidth id="buttonInvestiment">Adicionar </Button>
                </form>

            </Card>
            <Table
                id="tableInvestiment"
                removeItemTable={removeInvestiment}
                tableTitle={["Investimentos", " Adicionados"]}
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={itemsOfTable} />

        </section>

    )

}

export default Investiment;
