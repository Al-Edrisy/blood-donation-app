// server/index.js
const express = require('express');
const fs = require('fs');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware setup
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)

// Path to the Excel file
const filePath = './data/donors.xlsx';

// Function to read data from the Excel file
const readData = () => {
  if (!fs.existsSync(filePath)) {
    return []; // If file doesn't exist, return empty array
  }
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Assuming data is in the first sheet
  return xlsx.utils.sheet_to_json(worksheet); // Convert sheet to JSON array
};

// Function to write data to the Excel file
const writeData = (data) => {
  const worksheet = xlsx.utils.json_to_sheet(data); // Convert JSON data to worksheet
  const newWorkbook = xlsx.utils.book_new(); // Create new workbook
  xlsx.utils.book_append_sheet(newWorkbook, worksheet, 'Donors'); // Add worksheet to the workbook
  xlsx.writeFile(newWorkbook, filePath); // Write workbook to file
};

// Route to get all donors
app.get('/donors', (req, res) => {
  const donors = readData(); // Read data from file
  res.json(donors); // Send JSON response with donor data
});

// Route to add a new donor
app.post('/add-donor', (req, res) => {
  const { name, bloodType, contact } = req.body; // Extract data from request body
  const donors = readData(); // Read existing donor data
  donors.push({ Name: name, 'Blood Type': bloodType, Contact: contact }); // Add new donor to array
  writeData(donors); // Write updated data to file
  res.status(200).send('Donor added successfully'); // Send success response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
