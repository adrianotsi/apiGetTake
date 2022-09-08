const express = require('express');
const getTakeRepoController = require('./controllers/getTakeRepo');

const routes = express.Router();

routes.get("/", (request, response) =>{
    return response.send("Oh... Hello World! How you doing?")
})

routes.get('/getRepos', getTakeRepoController.index);

module.exports = routes;