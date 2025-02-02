function insert_Row() {
    let table = document.querySelector("#sampleTable")
	let row = document.createElement("tr")
	let data1 = document.createElement("td")
	data1.innerText = "New Cell1"
	data1.value = "New Cell1"
	let data2 = document.createElement("td")
	data2.innerText = "New Cell2"
	data2.value = "New Cell2"
	row.append(data1,data2)
	table.insertBefore(row, table.firstChild)
}
