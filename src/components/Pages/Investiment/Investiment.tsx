import { Card } from "../../Card";
import { Table } from "../../Table";
import { ObjectTable } from "../../../common/interfaces/TableProps";
import { useContext } from "react";
import { Form } from "../../Form";
import { TypeProps } from "../../../common/interfaces/FormProps";
import { ButtonProps } from "../../../common/interfaces/ButtonProps";
import { InputProps } from "../../../common/interfaces/InputProps";
import { InvestimentContext } from "../../../common/context/InvestimentContext";

const Investiment = () => {

    const investimentContext = useContext(InvestimentContext);

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
                optionsOfSelect: [
                    {value:"Renda Variável"},
                    {value: "Renda Fixa"},
                    {value: "Outro"}
                ]
            }
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

    function removeItemFromTable(id: number) {

        const newArrayOfObjects = investimentContext?.objectsTable.filter(
            objectTable => objectTable.id !== id ? objectTable : false
        );

        investimentContext?.setObjectsTable(newArrayOfObjects as ObjectTable[]);
    }

    function buttonClicked(): void {
        const name = document.querySelector("#inputNameInvestiment") as HTMLInputElement;
        const type = document.querySelector("#inputTypeInvestiment") as HTMLInputElement;
        const value = document.querySelector("#inputValueInvestiment") as HTMLInputElement;

        const objTableData: ObjectTable = {
            id: investimentContext!.idObjectTable,
            name: name.value,
            type: type.value,
            value: value.valueAsNumber
        }

        investimentContext?.setObjectsTable([...investimentContext.objectsTable, objTableData]);
        investimentContext?.setIdObjectTable(investimentContext.idObjectTable + 1);
        console.log(investimentContext);

    }

    return (
        <>
            
            <Table
                removeItemTable={removeItemFromTable}
                tableTitle={["Investimentos", " Adicionados"]}
                titleHead={["Nome", "Tipo", "Valor"]}
                tableData={investimentContext?.objectsTable} />
            <Card
                firstLineCard="Adicionando Um"
                title="Investimento"
                describe="Preencha as informações para adicionar uma nova investimento"
            >
                <Form inputs={inputsTemp} buttons={buttonsTemp} />
            </Card>
        </>

    )

}

export default Investiment;