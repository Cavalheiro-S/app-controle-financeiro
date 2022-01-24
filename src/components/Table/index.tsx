import { TableProps } from "../../common/interfaces/TableProps"
import "./index.css"
export const Table = ({ tableTitle, titleHead, tableData, removeItemTable }: TableProps) => {

    function hasRemoveItemTable(id: number): JSX.Element{

        if(removeItemTable){
            return <button onClick={event => removeItemTable(id)} className="tableButtonDelete">X</button>
        }

        return <></>
    }

    return (
        <div className="divTable">

            <h2 className="tableTitle">
                <span className="primaryText">{tableTitle[0]}</span>
                <span>{tableTitle[1]}</span>
            </h2>
            <table className="tablePage">
                <thead>
                    <tr className="tableLine">
                        {titleHead.map((titleDataColumn, index) => {
                            return <td className="tableData tableDataHeader" key={index}>{titleDataColumn}</td>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((data, index) => {
                        return (
                            <tr className={`tableLine ${index % 2 === 0 ? "selected" : ""}`} key={index}>
                                <td className="tableData tableBodyData">{data.name}</td>
                                <td className="tableData tableBodyData">{data.type}</td>
                                <td className="tableData tableBodyData">R$ {data.value}</td>
                                {hasRemoveItemTable(data.id)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}