// import the data from data.js
const tableData = data;
// Function clearing and building our table
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

///////////////////////////////////////////////////////////////////////////////////////

// This is all practice stuff
// Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Takes two numbers and adds them
//function addition(a, b) {
//    return a + b;
//  }
//  console.log(addition(4,5));  
  
// Functions can call other functions
//function doubleAddition(c, d) {
//    var total = addition(c, d) * 2;
//    return total;
//  }

// Simple JavaScript log statement
//function printHello() {
//  return "Hello there!";
//}

// Arrow Function
//printHello = () => "Hello there!";

// Converted to an arrow function
//addition = (a, b) => a + b;

// Converted to an arrow function
//doubleAddition => addition(c,d)*2;

// for loops

//let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
//function listLoop(userList) {
//  for (var i = 0; i < userList.length; i++) {
//    console.log(userList[i]);
//  }
//}

// Array of vegetables
//let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// For loop of vegetables and the print statement
//for (var i = 0; i < vegetables.length; i++) {
//  console.log("I love " + vegetables[i]);
//}

// Another way to loop without using an array
//for (var i = 0; i < 5; i++) {
//  console.log("I am " + i);
//}
