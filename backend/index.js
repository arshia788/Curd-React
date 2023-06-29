import express from 'express';

// ba in miay vasl mikoni 
import mysql from 'mysql';

const app = express();

// * createConnection ba in miay vasal mishi 
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    // esme on project ma hast
    database:"crud-project"
})

// inja mikhay on response ro begiri
// aval mishe on rishe ma

app.get('/', (req,res)=>{
    res.json("Hii there")
})

// local host ma shod 3003 
app.listen(3003, ()=>{
    console.log('hello there!');

})







