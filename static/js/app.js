// Assign the data from data.js to a variable
var ufoSightings = data;
//console.log(ufoSightings);

// select the submit button
var submit = d3.select("#filter-btn");
var citySubmit = d3.select("#filter-city-btn");
var stateSubmit = d3.select("#filter-state-btn");
var countrySubmit = d3.select("#filter-country-btn");
var shapeSubmit = d3.select("#filter-shape-btn");

// filter by date
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

// filter by city
citySubmit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
    // Get the value property of the input element
    var userInputDate = inputElement.property("value");

    var filteredData = ufoSightings.filter(ufo => ufo.city === userInputDate);    
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

// filter by state
stateSubmit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
    // Get the value property of the input element
    var userInputDate = inputElement.property("value");

    var filteredData = ufoSightings.filter(ufo => ufo.state === userInputDate);    
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

// filter by country
countrySubmit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#country");
    // Get the value property of the input element
    var userInputDate = inputElement.property("value");

    var filteredData = ufoSightings.filter(ufo => ufo.country === userInputDate);    
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

// filter by shape
shapeSubmit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");
    // Get the value property of the input element
    var userInputDate = inputElement.property("value");

    var filteredData = ufoSightings.filter(ufo => ufo.shape === userInputDate);    
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