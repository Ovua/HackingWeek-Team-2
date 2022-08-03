// Function per evitare la duplicazione dei publishers nel primo chart
function searchElement(val, arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == val) {
      return i;
    }
  return -1;
}

//Function che genera 2 array (publishers, numero art.) per l'assegnazione dei valori
async function pieDataFetcher() {
  const val = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
  const data = await val.json();
  const labelArr = [];
  const dataArr = [];
  data.forEach((article) => {
    const publishers = article.newsSite;
    const indexArr = searchElement(publishers, labelArr);
    if (indexArr == -1) {
      labelArr.push(publishers);
      dataArr.push(1);
    } else {
      dataArr[indexArr] += 1;
    }
  });
  return [labelArr, dataArr];
}

//Pie Chart per le ultime 10 pubblicazioni avvenute
async function init() {
  const [labels, data] = await pieDataFetcher();

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          label: "num of Publications",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Latest Publications",
          font: {
            size: 30,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
init();

//dichiarazione array per il secondo chart, e funzione per il fetch dei dati
let stats = [];

async function barDataFetcher() {
  let month = [
    "",
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
  ];

  //loop dei 12 mesi
  for (let i = 1; i < 9; i++) {
    let response = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles/count?newsSite_contains=1&publishedAt_gt=2022-0${i}&publishedAt_lt=2022-0${
        i + 1
      }`
    );
    let data = await response.json();
    stats.push(data);
  }
}
barDataFetcher();

// Chart
const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        axis: "y",
        label: "SpaceFlight Insider publications",
        data: stats,
        borderColor: ["rgba(255, 99, 132, 1)"],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    indexAxis: "y",
    maintainAspectRatio: false,
    animations: {
      y: {
        easing: "easeInOutElastic",
        from: (ctx) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly publications of 2022, by SpaceFlight Insider",
        font: {
          size: 30,
        },
      },
    },
  },
});

const chartBtn = document.getElementById("chart-btn");
const chartWrapper = document.getElementById("graph-displayer");

//Switch to Chart View

chartBtn.addEventListener("click", () => {
  chartWrapper.classList.toggle("chart-show");
});
