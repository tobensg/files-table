import React from 'react'
import styled from 'styled-components'
import TableHeader from './table-header'
import TableBody from './table-body'

const Root = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	width: 100%;
	cursor: pointer;
`

const StyledTable = styled.table`
	width: 90%;
	border-collapse: collapse;
	border: 1px solid black;
	-webkit-box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.75);
	-moz-box-shadow:    0px 2px 5px 0px rgba(50, 50, 50, 0.75);
	box-shadow:         0px 2px 5px 0px rgba(50, 50, 50, 0.75);

`

const FilesTableView = ({
	localData,
	selectAllChange,
	selectedCount,
	selectAll,
	downloadSelected,
	checkboxRef,
	toggleRow,
}) => (
	<Root>
		<StyledTable>
			<TableHeader 
					selectAllChange={selectAllChange}
					selectedCount={selectedCount}
					selectAll={selectAll}
					downloadSelected={downloadSelected} 
					checkboxRef={checkboxRef} />
			
			<TableBody toggleRow={toggleRow} localData={localData} />
		</StyledTable>
	</Root>
)

export default FilesTableView