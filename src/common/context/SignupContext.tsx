import React, { SetStateAction } from "react";
import { useState } from "react";
import { PatternContextProps } from "../interface/PatternContextProps";

export interface SignupProps{
    name: string;
    email: string;
    password: string;
}

interface SignupContextProps{

    usersData: SignupProps[];
    setUsersData: React.Dispatch<SetStateAction<SignupProps[]>>;
}

export const SignupContext = React.createContext<SignupContextProps| null>(null);

export const SignupProvider = ({children}: PatternContextProps) => {

    const [usersData, setUsersData] = useState<SignupProps[]>([]);


    return (
        <SignupContext.Provider value={{usersData,setUsersData}}>
            {children}
        </SignupContext.Provider>

    )
}