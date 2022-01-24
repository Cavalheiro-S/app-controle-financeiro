import { useContext } from "react"
import { ExpenseContext } from "../../../common/context/ExpenseContext";
import { InvestimentContext } from "../../../common/context/InvestimentContext"
import { Table } from "../../Table";

export const Dashboard = () => {

    const investimentContext = useContext(InvestimentContext);
    const expenseContenxt = useContext(ExpenseContext)

    return (
        <>
            <div style={{display:"flex", alignItems:"flex-start", height:"100%"}}>
                Teste
            </div>
            <Table
                tableData={investimentContext?.objectsTable}
                tableTitle={["Investimentos"]}
                titleHead={["Nome", "Tipo", "Valor"]}
            />
            <Table
                tableData={expenseContenxt?.objectsTable}
                tableTitle={["Despesas"]}
                titleHead={["Nome", "Tipo", "Valor"]}
            />
        </>


    )
}