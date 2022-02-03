import { TableProps } from "../../common/interfaces/TableProps"
export const Table = ({ tableTitle, titleHead, tableData, classTable, removeItemTable }: TableProps) => {

    function hasRemoveItemTable(id: number): JSX.Element{

        if(removeItemTable){
            
            return <button onClick={event => removeItemTable(id)} className="table__button--delete">X</button>
        }

        return <></>
    }

    return (
        <section className={`section__table ${classTable !== undefined ? classTable : ""}`}>

            <h2 className="section__title">
                <span className="section__span--highlight">{tableTitle[0]}</span>
                <span>{tableTitle[1]}</span>
            </h2>
            <table className="table">
                <thead>
                    <tr className="table__line">
                        {titleHead.map((titleDataColumn, index) => {
                            return <td className="table__data table__header" key={index}>{titleDataColumn}</td>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((data, index) => {
                        return (
                            <tr className={`table__line${index % 2 === 0 ? "--pair" : "--odd"}`} key={index}>
                                <td className="table__data tbody__data">{data.name}</td>
                                <td className="table__data tbody__data">{data.type}</td>
                                <td className="table__data tbody__data">{data.date}</td>
                                <td className="table__data tbody__data">R$ {data.value}</td>
                                {hasRemoveItemTable(data.id)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}