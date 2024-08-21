import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request,response) => {
	console.log(request)
	return response.status(234).send('Welcome to Bookstore')
});


mongoose 
	.connect(mongoDBURL)
	.then(() => {
		console.log('App connected to database');
	})
	.catch((error) => {
		console.log(error);
	});