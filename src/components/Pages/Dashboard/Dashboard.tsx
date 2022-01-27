import { useContext } from "react"
import { ExpenseContext } from "../../../common/context/ExpenseContext";
import { InvestimentContext } from "../../../common/context/InvestimentContext"
import { MessageCard } from "../../Card-Message";
import { InfoCard } from "../../Info-Card";

export const Dashboard = () => {

    const investimentContext = useContext(InvestimentContext);
    const expenseContenxt = useContext(ExpenseContext)

    return (
        <section className="container__page dashboard">
            <MessageCard classComponent="dashboard__message" />
            <div style={{ display: "flex", gap: "64px" }}>
                <InfoCard value={1400} describe="Renda Mensal" stringLogo="account_balance" />
                <InfoCard value={expenseContenxt?.valueTotalExpense} describe="Despesas Mensais" stringLogo="money_off" />
                <InfoCard value={investimentContext?.valueTotalInvestiment}
                    describe="Patrimônio Investido" stringLogo="attach_money" />
            </div>
        </section>


    )
}