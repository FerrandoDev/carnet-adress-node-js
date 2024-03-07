import fs from 'node:fs'
import csv from "csv-parser";

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;
export default (req, res) => {

    const persons = [];

    fs.createReadStream('./data/person.csv')
        .pipe(csv())
        .on('data', (data) => persons.push(data))
        .on('end', () => {
            res.render('index.ejs', {base_url: BASE_URL, persons: persons})
        })
        .on('error', (err) => {
            console.error("Erreur lors de la lecture du fichier CSV:", err);
            res.status(500).send("Erreur lors de la lecture du fichier CSV");
        });
}