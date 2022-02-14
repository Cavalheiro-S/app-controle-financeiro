import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { ObjectTable } from "../../common/interface";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import axios from "axios";
import moment from "moment";
import { inputsInvestiment } from "./formInputs";

const Investiment = () => {

    const [itemsOfTable, setItemsOfTable] = useState<ObjectTable[] | null>();

    useEffect(() => {
        axios.get<ObjectTable[]>("http://localhost:5000/investiment/")
            .then(table => {
                setItemsOfTable(table.data)
            })
    })

    function handleClick(): void {

        const inputName = document.querySelector(`#inputNameInvestiment`) as HTMLInputElement
        const inputType = document.querySelector(`#inputTypeInvestiment`) as HTMLInputElement
        const inputValue = document.querySelector(`#inputValueInvestiment`) as HTMLInputElement
        const inputDate = document.querySelector(`#inputDateInvestiment`) as HTMLInputElement

        axios.post("http://localhost:5000/investiment/", {
            name: inputName.value ? inputName.value : "",
            type: inputType.value,
            value: inputValue.valueAsNumber ? inputValue.valueAsNumber : 0,
            date: inputDate.valueAsDate
                ? moment(inputDate.valueAsDate).add(1, "d").format("YYYY-MM-DD")
                : moment().format("YYYY-MM-DD")
        }).then(resp => console.log(resp.data))
    }

    function removeItemFromTable(id: number) {
        axios.delete(`http://localhost:5000/investiment/${id}`)
            .then(() => console.log("Item retirado"))
    }

    return (
        <section className="container__page container__page--flex">
            
            <Card
                firstLineCard="Adicionando Um"
                title="Investimento"
                describe="Preencha as informações para adicionar uma nova investimento"
            >
                <Form inputs={inputsInvestiment}
                    buttons={
                        [{
                            text: "Adicionar",
                            handleClick: handleClick
                        }]} />
            </Card>
            <Table
                removeItemTable={removeItemFromTable}
                tableTitle={["Investimentos", " Adicionados"]}
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={itemsOfTable} />

        </section>

    )

}

export default Investiment;