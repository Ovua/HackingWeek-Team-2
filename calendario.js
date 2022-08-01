// //Questo modulo permette l'import del calendario
let url = 'https://api.spaceflightnewsapi.net/v3/articles'

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
      month: 'long',
      year: 'numeric',
    },  
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: '',
    },
    initialView: 'dayGridMonth',
    initialDate: '2022-07-01',
    height: '100%',
    expandRows: true,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    nowIndicator: true,
    dayMaxEvents: true, // allow "more" link when too many events
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

