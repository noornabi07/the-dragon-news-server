const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/catagories.json')

app.get('/', (req, res)=>{
    res.send('The dragon news is comming...')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`The dragon news port is: ${port}`)
})