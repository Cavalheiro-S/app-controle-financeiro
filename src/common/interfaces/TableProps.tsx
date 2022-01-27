export interface TableProps{
    classTable?: string;
    removeItemTable?: Function;
    tableTitle: string[];
    titleHead: Array<string>;
    tableData: Array<ObjectTable>| undefined;
}

export interface ObjectTable{
    id:number;
    name: string;
    type: string;
    value: number;
}