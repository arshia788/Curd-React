import express from 'express';
import mysql from 'mysql';

const app = express();

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"crud-project"
})


app.get('/', (req,res)=>{
    res.json("Hii there")
})


// har mogeh karbar dar khasti mifresteh in anjam mishe 
app.get('/cars', (req, res)=>{
    const q = "SELECT * FROM cars"
    db.query(q, (err, data)=>{
        
        if(err) return res.json(err)

        return res.json(data)
    } )
})

// mikhay post bokoni yani mikhy befresti chizi ro be data 
// req mishe load kardan safhe ma bashe 
app.post('/cars', (req, res)=>{

    const q = "INSERT INTO cars ( `title`, `desc`, `price` ,`cover`) VALUE (?) ";
    
    // values in mishe jay on ?
    // inja ham omadi body ro gerefti chon ham chi daroon body hast
    const values= [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    // inja mireh mishineh on values 
    db.query(q, [values] ,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })


})

app.listen(3003, ()=>{
    console.log('hello there!');
})

