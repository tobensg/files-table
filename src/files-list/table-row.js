import styled from 'styled-components'

const TableContentRow = styled.tr`
	background-color: ${props => props.selected ? "#d9dedc" : "#ffffff"};
	:hover {
		background: #baded0;
	}
`

const TDStatus = styled.td`
	text-transform: capitalize;
`

const Dot = styled.span`
	text-align: right;
	height: 10px;
	width: 10px;
	background-color: green;
	border-radius: 50%;
	display: inline-block;
`

const TableRow = ({row, index, toggleRow}) => (
	<TableContentRow 
		selected={row.selected} 
		onClick={()=>row.status==='available' && toggleRow(index)}
	>
		<td>
			<input
				type="checkbox"
				id={'checkbox-row' + index}
				name={'checkbox-row' + index}
				disabled = {row.status!=='available'}
				onChange={()=> toggleRow(index)}
				onClick={(e)=> e.stopPropagation()}
				checked={row.selected}
				value={row.selected}
			/>
		</td>
		<td>{row.name}</td>
		<td>{row.device}</td>
		<td>{row.path}</td>
		<td>
			{row.status === 'available' ? (<Dot alt="green dot"/>):(<span></span>)}
		</td>
		<TDStatus>{row.status}</TDStatus>
	</TableContentRow>
)

export default TableRow