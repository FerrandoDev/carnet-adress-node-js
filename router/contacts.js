import fs from "fs";
import express from "express";
import HomeController from "../controller/home.js";
import PersonController from "../controller/person.js";


const router = express.Router();

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;


router.get('/', HomeController)

router.get('/person/:id', PersonController.getPerson)

router.get('/person/edit/:id', PersonController.getEditPerson)
router.post('/person/edit/:id', PersonController.postEditPerson )
/*
router.get('/add/person', AddPersonController.get)
router.post('/add/post', AddPersonController.post )



router.get('/delete/persons/:id', AddPersonController.get)
router.post('/delete/post', AddPersonController.post )


 */


export default router;