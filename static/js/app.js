// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");


    //  Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Next, loop through each data field row and 
    // add the data to its table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
  });
}

// Grab the datetime value from the filter
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  
  // if the date matches the condition,
  // save the data to the filteredata variable
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: if no date was found, return just
  // the original data

  buildTable(filteredData);
}

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);