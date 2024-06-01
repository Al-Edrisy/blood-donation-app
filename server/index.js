// server/index.js
const express = require('express');
const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const csvParser = require('csv-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware setup
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)

// Path to the CSV file
const filePath = './data/donors.csv';

// Function to read data from the CSV file
const readData = () => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => data.push(row))
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
};

// Function to append data to the CSV file
const appendData = async (data) => {
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filePath, { flags: 'a' });
    writer.on('error', reject);
    writer.on('finish', resolve);
    data.forEach((record) => writer.write(`${record.Name},${record.BloodType},${record.Contact}\n`));
    writer.end();
  });
};

// Route to get all donors
app.get('/donors', async (req, res) => {
  try {
    const donors = await readData(); // Read data from file
    res.json(donors); // Send JSON response with donor data
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).send('Error reading data');
  }
});

// Route to add a new donor
app.post('/add-donor', async (req, res) => {
  const { name, bloodType, contact } = req.body; // Extract data from request body
  const donor = { Name: name, BloodType: bloodType, Contact: contact }; // Create donor object

  try {
    await appendData([donor]); // Append data to file
    res.status(200).send('Donor added successfully'); // Send success response
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).send('Error adding donor');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
