import GetAllPerson from "../utils/getAllPerson.js";
import UpdatePerson from "../utils/editPerson.js";
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
            const person = persons.find(person => person.id === id);

            if (person) {
                res.render('person/person.ejs', {base_url: BASE_URL, person: person});
            }

        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données:", error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des données");
        }
    },
    getEditPerson: async (req, res) => {
        try {
            const persons = await GetAllPerson();
            const {id} = req.params;
            req.session.personIdToEdit = id;
            console.log(req.session.personIdToEdit);
            console.log(id);
            const personToEdit = persons.find(person => person.id === id);
            if (personToEdit) {
                    res.render('person/getEdit.ejs', {base_url: BASE_URL, person: personToEdit});
                }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données:", error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des données");
        }
    },
    postEditPerson: async (req, res) => {
        try {
            console.log('a')
            const persons = await GetAllPerson();
            const personIdToEdit = req.session.personIdToEdit;
            const personToEditIndex = persons.findIndex(person => person.id === personIdToEdit);

            if (personToEditIndex !== -1) {
                const personToEdit = persons[personToEditIndex];

                const updatedPerson = {
                    id: personToEdit.id,
                    gender: req.body.gender || personToEdit.gender,
                    last_name: req.body.last_name || personToEdit.last_name,
                    first_name: req.body.first_name || personToEdit.first_name,
                    phone: req.body.phone || personToEdit.phone,
                    email: req.body.email || personToEdit.email,
                    birthday: req.body.birthday || personToEdit.birthday
                };

                persons[personToEditIndex] = updatedPerson;
                await UpdatePerson(persons[personToEditIndex]);

                res.render('person/postEdit.ejs', { base_url: BASE_URL, newPerson: updatedPerson, oldPerson: personToEdit });
            } else {
                res.status(404).send("Personne non trouvée dans la base de données.");
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour des données de la personne:", error);
            res.status(500).send("Une erreur s'est produite lors de la mise à jour des données de la personne.");
        }
    }
};
