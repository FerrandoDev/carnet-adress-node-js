import express from "express";
import session from "express-session"
import router from "./router/contacts.js"
const app = express();

app.use(session({
    secret:  "s%3Al3ozSdvQ83TtC5RvJ.CibaQoHtaY0H3QOB1kqR8H2A",
    saveUninitialized: false,
    resave: false,
}));

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