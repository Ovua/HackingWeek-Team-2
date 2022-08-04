const urlData = 'https://api.spaceflightnewsapi.net/v3/articles'
let newsArray = []


async function fetcher(url){
    const response = await fetch(url);
    let data = await response.json();
    let newsSite = data.forEach(element => {(element.newsSite)
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

        for (let j of data) {
            if( !newsArray.includes(j.newsSite) ) {
                newsArray.push(j.newsSite)
            }
        }

        for (let x of newsArray) {
            let option = document.createElement('option');
            let optionText = document.createTextNode(`${x}`);
            option.appendChild(optionText);
            select.appendChild(option);
        }

    }

    selectCreator()
    function update() {
        let autore = document.getElementById("author");
        let pick = autore.value.toUpperCase();
        let space = pick.replace(/ /g, "")
        let table = document.getElementById("table");
        let tr = table.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
          let td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(space) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }     
        }
      }
    
    const select = document.getElementById('author');
    select.addEventListener('change', update)

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



//buttons
function display() {
    let tableContainer = document.querySelector('.table-container');
    let chartWrapper = document.getElementById("chart-displayer");
    let calendarContainer = document.getElementById("container-calendar");
    tableContainer.style.display = 'block'
    chartWrapper.style.display = "none";
    calendarContainer.style.display = "none";
  }
  
  let tableButton = document.querySelector('#table-button');
  tableButton.addEventListener('click', display)