import GetAllPerson from "../utils/getAllPerson.js";

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;

export default async (req, res) => {
    try {
        const persons = await GetAllPerson();
        res.render('index.ejs', {base_url: BASE_URL, persons: persons});
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
        res.status(500).send("Une erreur s'est produite lors de la récupération des données");
    }
};
