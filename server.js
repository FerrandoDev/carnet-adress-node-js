import express from "express";
import router from "./router/contacts.js"


const app = express();

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', router)
app.use(express.static('public'))





app.listen(port, () => {
    console.log('Server running at http://localhost:8000/');
})