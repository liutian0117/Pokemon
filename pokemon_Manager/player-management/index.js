const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const dataFilePath = path.join(__dirname, 'data.json');

app.use(express.json());
app.use(express.static('public'));

// Load initial data
let data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// Get all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Add a new player
app.post('/api/addPlayer', (req, res) => {
    const { name, profession, position } = req.body;
    const newPlayer = { name, profession };
    const insertPosition = Math.max(1, Math.min(position, data.candidateArr.length + 1)) - 1; // Ensure position is within valid range and adjust to 0-based index
    data.candidateArr.splice(insertPosition, 0, newPlayer);
    saveData();
    res.status(201).json(newPlayer);
});

// Delete a player
app.delete('/api/deletePlayer/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < data.candidateArr.length) {
        data.candidateArr.splice(index, 1);
        saveData();
        res.status(204).send();
    } else {
        res.status(404).send('Player not found');
    }
});

// Update a player
app.put('/api/updatePlayer/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < data.candidateArr.length) {
        data.candidateArr[index] = req.body;
        saveData();
        res.status(200).json(data.candidateArr[index]);
    } else {
        res.status(404).send('Player not found');
    }
});

// Toggle AFK status
app.post('/api/toggleAfk/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const afkIndex = data.afkNumbers.indexOf(index + 1);
    if (afkIndex > -1) {
        data.afkNumbers.splice(afkIndex, 1);
    } else {
        data.afkNumbers.push(index + 1);
        data.afkNumbers.sort((a, b) => a - b);
    }
    saveData();
    res.status(200).json(data.afkNumbers);
});

// Save data to file
function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});