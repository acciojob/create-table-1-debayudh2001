function insert_Row() {
    let table = document.querySelector("#sampleTable")
	let row = document.createElement("tr")
	let data1 = document.createElement("td")
	data1.innerText = "New Cell 1"
	let data2 = document.createElement("td")
	data2.innerText = "New Cell 2"
	row.appendChild(data1)
	row.appendChild(data2)
	table.insertBefore(row, table.firstChild)
}
