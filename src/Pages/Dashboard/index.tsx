import { useEffect } from 'react';
// import { MessageCard } from "../../components/Card-Message";
import { InfoCard } from "../../components/Info-Card";
import {useState} from 'react';
import axios from 'axios';

export const Dashboard = () => {

    const [investimentTotal, setInvestimentTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);

    useEffect(()=>{
        
        axios.get<number>("http://localhost:4000/investiment/total")
        .then(total => setInvestimentTotal(total.data))

        axios.get<number>("http://localhost:4000/expense/total")
        .then(total => setExpenseTotal(total.data))

        return () => {
            setInvestimentTotal(0);
            setExpenseTotal(0)
        }
    },[])

    return (
        <section className="container__page dashboard">
            <div className='dashboard__card'>
                <InfoCard value={1400} describe="Renda Mensal" stringLogo="account_balance" />
                <InfoCard value={expenseTotal} describe="Despesas Mensais" stringLogo="money_off" />
                <InfoCard value={investimentTotal}
                    describe="Patrimônio Investido" stringLogo="attach_money" />
            </div>
        </section>


    )
}