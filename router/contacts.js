import fs from "fs";
import express from "express";

const router = express.Router();

const port = 8000;
const hostname = "localhost";
const BASE_URL = `http://${hostname}:${port}`;



export default router;