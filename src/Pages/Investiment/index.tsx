import { Card } from "../../components/Card";
import Table from "../../components/Table";
import { ObjectTable } from "../../common/interface";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Autocomplete, Button, Snackbar, TextField } from "@mui/material";
import PageModel from "./Page-Model";

const Investiment = () => {

    const [itemsOfTable, setItemsOfTable] = useState<ObjectTable[] | null>();
    const [optionsInvestiment, setOptionsInvestiment] = useState<string[] | null>(["teste", "outroTeste"]);
    const [snackBarStatus, setSnackBarStatus] = useState(false);
    function updateTable() {
        axios.get<ObjectTable[]>("http://localhost:4000/investiment/")
            .then(tableData => setItemsOfTable(tableData.data));
    }

    useEffect(() => {
        updateTable();
        return () => {
            setItemsOfTable(null);
        }
    }, [])

    function AddNewInvestiment(event: React.FormEvent): void {
        event.preventDefault();
        const investimentModel = new PageModel("inputNameInvestiment", "inputTypeInvestiment", "inputValueInvestiment", "inputDateInvestiment");
        axios.post("http://localhost:4000/investiment/", investimentModel.makeObjectWithValues())
            .then(() => {
                updateTable();
                setSnackBarStatus(true);
            });
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
                    <Autocomplete
                        freeSolo={true}
                        options={optionsInvestiment!}
                        renderInput={(params) => {
                            return <TextField {...params} required fullWidth inputProps={{ ...params.inputProps, id: "inputNameInvestiment" }} label="Nome do Investimento" />
                        }}
                    />

                    <Autocomplete
                        freeSolo={true}
                        options={["Renda Variável", "Renda Fixa"]}
                        renderInput={(params) => {
                            return <TextField {...params} required fullWidth inputProps={{ ...params.inputProps, id: "inputTypeInvestiment" }} label="Tipo de Investimento" />
                        }}
                    />
                    <TextField required fullWidth id="inputDateInvestiment" type="date" />
                    <TextField required fullWidth id="inputValueInvestiment" type="number" label="Valor do Investimento" />
                    <Button type="submit" classes={{ root: "button" }} fullWidth id="buttonInvestiment">Adicionar </Button>
                </form>
            </Card>
            <Table
                id="tableInvestiment"
                removeItemTable={removeInvestiment}
                tableTitle={["Investimentos", " Adicionados"]}
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={itemsOfTable}
            />
            <Snackbar open={snackBarStatus} onClose={event => setSnackBarStatus(false)}>
                <Alert onClose={event => setSnackBarStatus(false)} severity="success">
                    Investimento adicionado
                </Alert>
            </Snackbar>

        </section>
    )
}

export default Investiment;
