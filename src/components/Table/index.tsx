import moment from "moment"
import { TableProps } from "../../common/interface/TableProps"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

export default (props: TableProps) => {

    return (
        <TableContainer classes={{ root: "section__table" }} component={Paper}>
            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#20ab3e" }}>
                        {props.titleHead.map((title, index) => {
                            return <TableCell key={index} sx={{ color: "white" }} align="center">{title}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {props.tableData ? props.tableData.map((data, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {data.name}
                            </TableCell>
                            <TableCell align="right">{data.type}</TableCell>
                            <TableCell align="right">{moment(data.date).format("DD/MM/YYYY")}</TableCell>
                            <TableCell align="right">R${data.value}</TableCell>
                            <TableCell
                                sx={{ color: "white" }}
                                onClick={event => props.removeItemTable!(data._id)}
                                classes={{ root: "table__data--delete" }}>
                                X
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    )
}