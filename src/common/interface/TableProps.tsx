export interface TableProps{
    id: string;
    classTable?: string;
    removeItemTable?: Function | undefined;
    tableTitle: string[];
    titleHead: Array<string>;
    tableData: Array<ObjectTable>| undefined | null;
}

export interface ObjectTable{
    _id:number;
    name: string;
    type: string;
    date: string;
    value: number;
}