import React, { SetStateAction, useState } from "react";
import { PatternContextProps } from "../interface/PatternContextProps";
import { ObjectTable } from "../interface/TableProps";
type ExpenseContextProps = {
    idObjectTable: number;
    setIdObjectTable: React.Dispatch<SetStateAction<number>>;
    objectsTable: ObjectTable[];
    setObjectsTable: React.Dispatch<SetStateAction<ObjectTable[]>>;
    valueTotalExpense: number;
    setValueTotalExpense: React.Dispatch<SetStateAction<number>>;
}

export const ExpenseContext = React.createContext<ExpenseContextProps | null>(null);

export const ExpenseProvider = ({ children }: PatternContextProps) => {

    const [objectsTable, setObjectsTable] = useState<ObjectTable[]>([]);
    const [idObjectTable, setIdObjectTable] = useState(0);
    const [valueTotalExpense, setValueTotalExpense] = useState(0);

    return (
        <ExpenseContext.Provider value={{
            idObjectTable,
            setIdObjectTable,
            objectsTable,
            setObjectsTable,
            valueTotalExpense,
            setValueTotalExpense
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}