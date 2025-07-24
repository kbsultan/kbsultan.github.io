// Fetch grade data from the server
async function fetchGradeData() {
  try {
    const response = await fetch('/grades'); // Calls the server route /grades
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json(); // Convert the response to JSON
    populateGradebook(data); // Fill the table with the data
  } catch (error) {
    console.error('Fetch error:', error); // Show any errors in the console
  }
}

// Populate the gradebook table with the received data
function populateGradebook(data) {
  const table = document.getElementById('gradebookTable'); // Get the table by ID
  table.innerHTML = ''; // Clear previous table contents

  // Add the table header
  const headerRow = table.insertRow();
  ['Name', 'Assignment', 'Grade'].forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });

  // Add rows for each grade entry
  data.forEach(entry => {
    const row = table.insertRow();
    row.insertCell().textContent = entry.name;
    row.insertCell().textContent = entry.assignment;
    row.insertCell().textContent = entry.grade;
  });
}

// Run the fetch function when the script loads
fetchGradeData();
