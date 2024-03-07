import fs from "node:fs";
import csv from "csv-parser";

const getAllPerson = () => {
    return new Promise((resolve, reject) => {
        const persons = [];
        fs.createReadStream('./data/person.csv')
            .pipe(csv())
            .on('data', (data) => persons.push(data))
            .on('end', () => {
                resolve(persons);
            })
            .on('error', (err) => {
                console.error("Erreur lors de la lecture du fichier CSV:", err);
                reject(err);
            });
    });
};

export default getAllPerson;
