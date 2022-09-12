import downloadIcon from './download.svg'

const TableHeader = ({
	selectAllChange,
	selectedCount,
	selectAll,
	downloadSelected,
	checkboxRef,
}) => (
	<thead>
		<tr>
			<th>
				<input
					ref={checkboxRef}
					type="checkbox"
					id={'select-all'}
					name={'checkbox-select-all'}
					checked={selectAll === 'all'}
					onChange={()=> selectAllChange()}
					onClick={(e)=> {
						e.preventDefault()
						e.stopPropagation()
					}}
				/>
			</th>
			<th>
				Selected {selectedCount}
			</th>
			<th>
				<button 
					onClick={()=>downloadSelected()}
					disabled={!selectedCount}
				>
					<img src={downloadIcon} className="dl-icon" alt="download icon" />
					&nbsp;
					Download Selected
				</button>
			</th>
		</tr>
		<tr>
			<th></th>
			<th>Name</th>
			<th>Device</th>
			<th>Path</th>
			<th></th>
			<th>Status</th>
		</tr>
	</thead>
)

export default TableHeader