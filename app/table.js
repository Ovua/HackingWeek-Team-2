function display() {
    let tableContainer = document.querySelector('.table-container');
    tableContainer.classList.remove('display-none')
}

let tableButton = document.querySelector('#table-button');
tableButton.addEventListener('click', display)


const urlData = 'https://api.spaceflightnewsapi.net/v3/articles'



async function fetcher(url){
    const response = await fetch(url);
    let data = await response.json();
    let newsSite = data.forEach(element => {console.log(element.newsSite)
    });

    function tabCreator() {
        let tab = 
        `<tr>
          <th>Immagine</th>
          <th>Titolo</th>
          <th>Url</th>
          <th>Data di Pubblicazione</th>
         </tr>`;

         for (let i of data) {
            tab += `<tr>
            <td><img src="${i.imageUrl}" style="width: 150px;"></img></td>
            <td>${i.title}</td>
            <td><a href="${i.url}">${i.url}</a></td> 
            <td>${i.publishedAt}</td>          
            </tr>`;
         }
         document.getElementById("table").innerHTML = tab;

    }

    tabCreator()
    

    function selectCreator() {
        let select = document.querySelector('.table-select')
        console.log(newsSite)

        for (let j of data) {
            let option = document.createElement('option');
            let optionText = document.createTextNode(`${j.newsSite}`);
            option.appendChild(optionText);
            select.appendChild(option);
        }
    }

    selectCreator()
}


fetcher(urlData)




function htmlToCSV(html, filename) {
	let data = [];
	let rows = document.querySelectorAll("tr");
			
	for (let i = 0; i < rows.length; i++) {
		let row = [], cols = rows[i].querySelectorAll("td, th");
				
		for (let j = 0; j < cols.length; j++) {
		        row.push(cols[j].innerText);
        }
		        
		data.push(row.join(",")); 		
	}

	downloadCSVFile(data.join("\n"), filename);
}

function downloadCSVFile(csv, filename) {
	let csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}

document.getElementById("table-export").addEventListener("click", function () {
	let html = document.getElementById("table").outerHTML;
	htmlToCSV(html, "students.csv");
})



