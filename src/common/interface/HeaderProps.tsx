export interface ItemHeaderProps {
    itemActive: number,
    setItemActive : React.Dispatch<React.SetStateAction<number>>
}

export interface HeaderProviderProps { 
    children: JSX.Element
}