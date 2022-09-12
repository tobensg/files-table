import TableRow from './table-row'

const TableBody = ({toggleRow, localData}) => {
	if (localData.length === 0) {
		// empty state handling
		return (<tbody><tr><td colSpan="5"><center>No files to display</center></td></tr></tbody>)
	}
	return (
		<tbody>
			{localData && localData.map( (row, index) => {
				return (
					<TableRow key={`row${index}`} row={row} index={index} toggleRow={toggleRow} />
				)
			})}
		</tbody>
	)
}

export default TableBody