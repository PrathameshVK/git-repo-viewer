const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fetchUser=require('./routes/fetchUser');

const app=express();
const port = process.env.port || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('server is running');
})

app.use(cors());
app.use('/api/search',fetchUser);

app.listen(port,()=>console.log('server is listening on port ',port));