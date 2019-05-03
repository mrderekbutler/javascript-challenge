// Assign the data from data.js to a variable
var ufoSightings = data;
console.log(ufoSightings);

// select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var userInputDate = inputElement.property("value");

    var filteredData = ufoSightings.filter(ufo => ufo.datetime === userInputDate);    
    console.log(filteredData); 
    
    var tbody = d3.select("tbody");
    
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
});
