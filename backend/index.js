import express from "express";
import mysql from "mysql";

// omadi in ro ezafeh kardi ta motasel beshan
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "crud-project"
});

app.use(express.json())
// omadi ejra kradi in ro 
app.use(cors());

app.get("/", (req, res)=> {
     res.json("Hiiiiii Is Runn")
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


app.listen(5000, ()=> {
     console.log("connected to backend");
})