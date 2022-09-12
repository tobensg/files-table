import TableRow from './table-row'

const TableBody = ({toggleRow, localData}) => (
	<tbody>
		{localData && localData.map( (row, index) => {
			return (
				<TableRow key={`row${index}`} row={row} index={index} toggleRow={toggleRow} />
			)
		})}
	</tbody>
)

export default TableBody