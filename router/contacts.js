import fs from "fs";
import express from "express";
import HomeController from "../controller/home.js";


const router = express.Router();

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;


router.get('/', HomeController)

/*router.get('/kitten/:id', PersonController)

router.get('/add/person', AddPersonController.get)
router.post('/add/post', AddPersonController.post )

router.get('/edit/person/:id', AddPersonController.get)
router.post('/edit/post', AddPersonController.post )

router.get('/delete/persons/:id', AddPersonController.get)
router.post('/delete/post', AddPersonController.post )


 */


export default router;