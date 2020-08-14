// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// build the table

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// grab the submit button
var submit = d3.select("#filter-btn");

// watch for click event of datetime filter
submit.on("click", function() {

// remove existing table
d3.select("tbody").html("");

// prevent the page from refreshing
d3.event.preventDefault();

// grab the date from the filter field
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// set up if to verify there is a date provided, otherwise throw an error message
if (dateTime != "") {
    // filter table
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);

    // display the filtered table
    filteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
}
else {
    tbody.append("tr").append("td").text("Please enter a date before filtering! Refresh the page to start over.");
}

});