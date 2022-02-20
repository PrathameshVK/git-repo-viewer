const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fetchUser=require('./routes/fetchUser');

const app=express();
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api/search',fetchUser);

app.listen(3000,()=>console.log('server is listening'));