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
var clickHandler = d3.select("#filter-btn");

// watch for click event of datetime filter
clickHandler.on("click", function() {

// remove existing table
d3.select("tbody").html("");

// prevent the page from refreshing
d3.event.preventDefault();

// grab the date from the filter field and reformat it
var dateTime = d3.select("#datetime").property("value");
var selectedCountry = d3.select("#country").property("value").toLowerCase();
var selectedState = d3.select("#state").property("value").toLowerCase();
var selectedCity = d3.select("#city").property("value").toLowerCase();
var selectedShape = d3.select("#shape").property("value").toLowerCase();

// set up tableData as filteredData
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}

// display the filtered table if there was data provided, otherwise throw an error message
if (dateTime != "") {
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
    tbody.append("tr").append("td").text("Please enter some data before filtering! Refresh the page to start over.");
}

});