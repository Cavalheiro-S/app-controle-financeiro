import { createContext, SetStateAction, useState } from "react";
import { ObjectTable } from "../interfaces/TableProps";

interface InvestimentProviderProps {
    children: JSX.Element | React.ReactElement;
}

type InvestimentContextProps = {
    idObjectTable: number;
    setIdObjectTable: React.Dispatch<SetStateAction<number>>;
    objectsTable: ObjectTable[];
    setObjectsTable: React.Dispatch<SetStateAction<ObjectTable[]>>
}

export const InvestimentContext = createContext<InvestimentContextProps | null>(null);

export const InvestimentProvider = ({ children }: InvestimentProviderProps) => {

    const [objectsTable, setObjectsTable] = useState<ObjectTable[]>([])
    const [idObjectTable, setIdObjectTable] = useState(0);

    return (
        <InvestimentContext.Provider value={{idObjectTable,setIdObjectTable, objectsTable, setObjectsTable }}>
            {children}
        </InvestimentContext.Provider>
    )

}
