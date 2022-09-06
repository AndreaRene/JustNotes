const express = require("express");
const path = require("path");
const fs = require('fs');
const util = require('util');

// package that creates uuid's
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// function to write notes into db.json
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

// function to read db file and add new objects
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

// function to delete notes
const deleteNote = (file, id) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let noteArray = [];
            noteArray.push(data);
            const parsedData = JSON.parse(noteArray);
            noteArray = parsedData.filter(note => note.id !== id);
            writeToFile(file, noteArray);
        }
    });
};

// GET route to retrieve notes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for to add new note
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid.v1(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

app.delete("/api/notes/:id", (req, res) => {
    console.info(`${req.method} request received to delete a note`);
    deleteNote('./db/db.json', req.params.id);
    res.json(`Note deleted successfully`);
});

// GET route for homepage
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at port: ${PORT}`)
);