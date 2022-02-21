const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fetchUser=require('./routes/fetchUser');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('server is running');
})

app.use(cors());
app.use('/api/search',fetchUser);

app.listen(process.env.PORT || 8000,()=>console.log('server is listening'));