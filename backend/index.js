import express from 'express';
import mysql from 'mysql';

const app = express();

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    // esme on project ma hast
    database:"crud-project"
})


app.get('/', (req,res)=>{
    res.json("Hii there")
})


// rafti on data ro begiri
app.get('/cars', (req, res)=>{

    // gofti har chizi ke dakhel table cars hast ro neshon bedeh
    const q = "SELECT * FROM CARS"

    // inja rafti ye query zadi on db ro v on q ro dadi behesh
    // aval err va dovom data ro gerefti
    db.query(q, (err, data)=>{
        
        // gofti agar err bod on ro neshon bedeh agar na biyad data ro neshon bedeh 
        if(err) return res.json(err)

        return res.json(data)
    } )
})

app.listen(3003, ()=>{
    console.log('hello there!');

})

