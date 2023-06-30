import express from 'express';
import mysql from 'mysql';

const app = express();

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"crud-project"
})


// omadi file json ro dadi ta betoneh bekoneh 
// * server express ma nmitoenh json bekoenh pas miay behesh migi 
app.use(express.json())

app.get('/', (req,res)=>{
    res.json("Hii there")
})


app.get('/cars', (req, res)=>{
    const q = "SELECT * FROM cars"
    db.query(q, (err, data)=>{
        
        if(err) return res.json(err)

        return res.json(data)
    } )
})

app.post('/cars', (req, res)=>{

    const q = "INSERT INTO cars ( `title`, `desc`, `price` ,`cover`) VALUE (?) ";
    
    const values= [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [values] ,(err, data)=>{
        if(err) return res.json(err)
        return res.json('success')
    })


})

app.listen(3003, ()=>{
    console.log('hello there!');
})

