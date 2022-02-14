import { createContext, useState } from "react";
import { HeaderProviderProps, ItemHeaderProps } from "../interface/HeaderProps";

export const HeaderContext = createContext({} as ItemHeaderProps);

export const HeaderProvider = ({children} : HeaderProviderProps ) => {
    
    const [itemActive,setItemActive] = useState(0);

    return (
        <HeaderContext.Provider value={{itemActive,setItemActive}}>
            {children}
        </HeaderContext.Provider>
    )
}

