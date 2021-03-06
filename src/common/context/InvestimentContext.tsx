import { createContext, SetStateAction, useState } from "react";
import { PatternContextProps } from "../interface/PatternContextProps";
import { ObjectTable } from "../interface/TableProps";


interface InvestimentContextProps{
    idObjectTable: number;
    setIdObjectTable: React.Dispatch<SetStateAction<number>>;
    objectsTable: ObjectTable[];
    setObjectsTable: React.Dispatch<SetStateAction<ObjectTable[]>>;
    valueTotalInvestiment: number;
    setValueTotalInvestiment: React.Dispatch<SetStateAction<number>>;
}

export const InvestimentContext = createContext<InvestimentContextProps | null>(null);

export const InvestimentProvider = ({ children }: PatternContextProps) => {

    const [objectsTable, setObjectsTable] = useState<ObjectTable[]>([])
    const [idObjectTable, setIdObjectTable] = useState(0);
    const [valueTotalInvestiment, setValueTotalInvestiment] = useState(0);

    return (
        <InvestimentContext.Provider
            value={{
                idObjectTable,
                setIdObjectTable,
                objectsTable,
                setObjectsTable,
                valueTotalInvestiment,
                setValueTotalInvestiment
            }}>
            {children}
        </InvestimentContext.Provider>
    )

}
