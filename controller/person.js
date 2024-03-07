import GetAllPerson from "../utils/getAllPerson.js";
import fs from 'node:fs';
import csv from 'csv-parser';

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;

export default {
    getPerson: async (req, res) => {
        try {
            const persons = await GetAllPerson();
            const {id} = req.params;
            for (let person of persons) {
                if (person.id === id) {
                    res.render('person.ejs', {base_url: BASE_URL, person: person});
                    break;
                }
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données:", error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des données");
        }
    },
    editPerson: (req, res) => {
    }
};
