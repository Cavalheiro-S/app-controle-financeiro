import React, { SetStateAction, useState } from "react";
import { ObjectTable } from "../interfaces/TableProps";

interface ExpenseProviderProps {
    children: JSX.Element | React.ReactElement;
}

type ExpenseContextProps = {
    idObjectTable: number;
    setIdObjectTable: React.Dispatch<SetStateAction<number>>;
    objectsTable: ObjectTable[];
    setObjectsTable: React.Dispatch<SetStateAction<ObjectTable[]>>
}

export const ExpenseContext = React.createContext<ExpenseContextProps|null>( null);

export const ExpenseProvider = ({children}:ExpenseProviderProps) => {

    const [objectsTable, setObjectsTable] = useState<ObjectTable[]>([]);
    const [idObjectTable, setIdObjectTable] = useState(0);

    return(
        <ExpenseContext.Provider value = {{idObjectTable,setIdObjectTable,objectsTable,setObjectsTable}}>
            {children}
        </ExpenseContext.Provider>
    )
}