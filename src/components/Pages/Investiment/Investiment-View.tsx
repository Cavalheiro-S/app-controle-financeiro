import { Card } from "../../Card";
import { Table } from "../../Table";
import { ObjectTable } from "../../../common/interfaces/TableProps";
import { SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import { Form } from "../../Form";
import { TypeProps } from "../../../common/interfaces/FormProps";
import { ButtonProps } from "../../../common/interfaces/ButtonProps";
import { InputProps } from "../../../common/interfaces/InputProps";
import { InvestimentContext } from "../../../common/context/InvestimentContext";
import axios from "axios";
import { Investiment } from "../../../models/Investiment";


const InvestimentView = () => {
    const [itemsOfTable, setItemsOfTable] = useState<ObjectTable[] | null>();
    

    useEffect( () => {
        axios.get<ObjectTable[]>("http://localhost:5000/investiment/all")
        .then( table => {
            setItemsOfTable(table.data)
        })

    })

    function buttonClicked(): void {

        const investiment = new Investiment(
            "inputNameInvestiment",
            "inputTypeInvestiment",
            "inputValueInvestiment",
            "inputDateInvestiment");

        axios.post("http://localhost:5000/investiment/add", {
            name: investiment.name,
            type: investiment.type,
            value: investiment.value,
            date: investiment.date
        }).then(resp => console.log(resp.data))


    }

    function removeItemFromTable(id: number) {
        axios.post("http://localhost:5000/investiment/delete", {
            id
        }).then(() => console.log("Item retirado"))
    }

    const inputsTemp: InputProps[] = [
        {
            id: "inputNameInvestiment",
            type: TypeProps.text,
            placeholder: "Nome do Investimento"
        },
        {
            id: "inputTypeInvestiment",
            type: TypeProps.text,
            placeholder: "Tipo do Investimento",
            select: {
                isSelect: true,
                optionsOfSelect: ["Renda Variável", "Renda Fixa", "Outro"]
            }
        },
        {
            id: "inputDateInvestiment",
            type: TypeProps.date,
            placeholder: "Data do Investimento"
        },
        {
            id: "inputValueInvestiment",
            type: TypeProps.number,
            placeholder: "Valor do Investimento"
        }
    ]

    const buttonsTemp: ButtonProps[] = [
        {
            text: "Adicionar",
            buttonClickedFunction: buttonClicked
        }]

    return (
        <section className="container__page container__page--flex">

            <Table
                removeItemTable={removeItemFromTable}
                tableTitle={["Investimentos", " Adicionados"]}
                titleHead={["Nome", "Tipo", "Data", "Valor"]}
                tableData={itemsOfTable} />
            <Card
                firstLineCard="Adicionando Um"
                title="Investimento"
                describe="Preencha as informações para adicionar uma nova investimento"
            >
                <Form inputs={inputsTemp} buttons={buttonsTemp} />
            </Card>
        </section>

    )

}

export default InvestimentView;