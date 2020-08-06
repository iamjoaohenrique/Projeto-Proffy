import express from "express";

const app = express();

app.get('/', (request, response) =>{
    return response.json({ messege:'hello world'});
});

app.listen(3333);