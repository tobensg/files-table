import React,
	{ useState, useEffect } from 'react'

import FilesTableView from './view'

const FilesTable = () => {
	const [tableData, setTableData] = useState([])
	const [localData, setLocalData] = useState([])
	const [selectedCount, setSelectedCount] = useState(0)
	const [maxSelected, setMaxSelected] = useState(0)
	const [selectAll, setSelectAll] = useState('none')

	useEffect(() => {
		// can put a future api call here perhaps.  For now use provided static data
		setTableData([
			{ name: 'smss.exe',
				device: 'Stark',
				path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
				status: 'scheduled' },
			{ name: 'netsh.exe',
				device: 'Targaryen',
				path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
				status: 'available' },
			{ name: 'uxtheme.dll',
				device: 'Lannister',
				path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
				status: 'available' },
			{ name: 'cryptbase.dll',
				device: 'Martell',
				path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
				status: 'scheduled' },
			{ name: '7za.exe',
				device: 'Baratheon',
				path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
				status: 'scheduled' }
		])
	},[])

	useEffect(()=>{
		if (tableData) {
			const newData = []
			let maxCount = 0;
			tableData.map(row => {
				newData.push({...row, selected: false})
				if (row.status==='available'){
					maxCount++
				}
			})
			setLocalData(newData)
			setSelectAll('none')
			setSelectedCount(0)
			setMaxSelected(maxCount)
		}
	},[tableData])

	useEffect(()=>{
		if (selectAll === 'all') {
			checkboxRef.current.checked = true;
			checkboxRef.current.indeterminate = false;
		} else if (selectAll === 'none') {
			checkboxRef.current.checked = false;
			checkboxRef.current.indeterminate = false;
		} else if (selectAll === 'some') {
			checkboxRef.current.checked = false;
			checkboxRef.current.indeterminate = true;
		}
	},[selectAll])

	useEffect(()=>{
		let count = 0
		localData.map((row, index) => {
			if (localData[index].selected === true){
				count++
			}
		})

		if (count===0){
			setSelectAll('none')
		} else {
			setSelectAll(count === localData.length ? 'all' : 'some')
		}
		setSelectedCount(count)
	},[localData])

	const toggleRow = (index) => {
		const newData = [...localData]
		newData[index].selected = !newData[index].selected
		setLocalData(newData)
	}

	const selectAllChange = () => {
		const newData = [...localData]

		if (selectedCount === maxSelected) {
			newData.map((row, index) => {
				newData[index].selected = false
			})
		} else {
			newData.map((row, index) => {
				if (newData[index].status === 'available'){
					newData[index].selected = true
				}
			})
		}
		setLocalData(newData)
	}

	const checkboxRef = React.useRef()

	const downloadSelected = () => {
		alert(
			localData.reduce((prev, curr)=>{
				let workingFiles = prev
				if (curr.selected) {
					workingFiles += `path: ${curr.path} device:${curr.device}\n`
				}
				return workingFiles
			}, '')
			)
	}

	return (
		<FilesTableView 
			localData={localData}
			selectAllChange={selectAllChange}
			selectedCount={selectedCount}
			selectAll={selectAll}
			downloadSelected={downloadSelected} 
			checkboxRef={checkboxRef}
			toggleRow={toggleRow}
		/>
	)
}

export default FilesTable