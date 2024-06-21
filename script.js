const thing = document.getElementById("pop-up");
const node = document.createTextNode("good morning");

function addExpense() {
    thing.style.setProperty("display", "inline")
}

var form = document.getElementById("expense");
var revForm = document.getElementById("revenue");

var travel = 0;
var school = 0;
var leisure = 0;
var utilities = 0;
var rent = 0;
var groceries = 0;

var revenue = 0;
var totalExpenses = 0;

var dat = [travel, school, leisure, utilities, rent, groceries];
var dat2 = [revenue, totalExpenses];

const ctw = document.getElementById('secondChart');
var cht2 = new Chart(ctw, {
    type: 'doughnut',
    data: {
        labels: ['Revenue', 'Expenses'],
        datasets: [{
            label: 'Total',
            data: [revenue, totalExpenses],
            borderWidth: 1
        }]
    }
});

const ctx = document.getElementById('myChart');
var cht = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Travel', 'School', 'Leisure', 'Utilities', 'Rent', 'Groceries'],
        datasets: [{
            label: 'Total Spent',
            data: [travel, school, leisure, utilities, rent, groceries],
            borderWidth: 1
        }]
    }
});

revForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var rev = document.getElementById("num").value;
    console.log(rev);
    revenue += +rev;
    dat2[0] = revenue;

    updateChart();
})

form.addEventListener("submit", function (event) {

    event.preventDefault();
    // console.log("second");
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var cost = document.getElementById("cost").value;

    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("cost").value = "";

    switch (type) {
        case "travel":
            dat[0] += +cost;
            break;
        case "school":
            dat[1] += +cost;
            break;
        case "leisure":
            dat[2] += +cost;
            break;
        case "utilities":
            dat[3] += +cost;
            break;
        case "rent":
            dat[4] += +cost;
            break;
        case "groceries":
            dat[5] += cost;
            break;
    }

    updateChart();
})

function calcExpense() {
    var tota = 0;
    for (let i in dat) {
        tota += dat[i];
    }
    console.log(tota);
    return tota;
}

function updateChart() {
    cht.config.data.datasets[0].data = dat;

    dat2[1] = calcExpense();
    cht2.config.data.datasets[0].data = dat2;

    cht.update();
    cht2.update();
}

