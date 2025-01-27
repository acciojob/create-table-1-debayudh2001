function insert_Row() {
    let table = document.querySelector("#sampleTable")
	let row = document.createElement("tr")
	let data1 = document.createElement("td")
	let text1 = document.createTextNode("New Cell1")
	data1.appendChild(text1)
	let data2 = document.createElement("td")
	let text2 = document.createTextNode("New Cell2")
	data2.appendChild(text2)
	row.appendChild(data1)
	row.appendChild(data2)
	table.insertBefore(row, table.firstChild)
}
