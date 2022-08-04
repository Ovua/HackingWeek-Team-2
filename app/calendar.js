let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30'

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    titleFormat: { 
      month: 'long',
      year: 'numeric',
    },  
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: '',
    },
    initialView: 'dayGridMonth',
    initialDate: '2022-08-01',
    height: '100%',
    expandRows: true,
    navLinks: true, 
    editable: true,
    selectable: true,
    nowIndicator: true,
    dayMaxEvents: true, 
})


fetch(url)
.then(response => response.json())
.then(data => data.forEach(dato => {
  let event = [{
    title: dato.title,
    start: dato.publishedAt
  }]
  calendar.addEventSource(event);
}))
  calendar.render()
});

function displayCalendar() {
  const chartWrapper = document.getElementById("chart-displayer");
  const tableContainer = document.querySelector(".table-container");
  const calendarContainer = document.getElementById("calendar-container")
  calendarContainer.style.display = "block";
  chartWrapper.style.display = "none";
  tableContainer.style.display = "none";
}

const calendarBtn = document.getElementById("calendar-btn");
calendarBtn.addEventListener("click", displayCalendar);