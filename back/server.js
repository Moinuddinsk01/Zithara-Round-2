const express=require('express');
const app=express();
const cors=require('cors');
const pool=require('./db')




app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        const response=await pool.query('SELECT * FROM customer_records');
        res.status(200).json(response.rows);
    }catch(e){
        res.status(500).json({message:"error"});
    }});



app.listen(8080,()=>{
    console.log('listening on 8080');
})