const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios');
const port = 5000


app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/getData', (req, res) => {
    axios.get('https://esw-onem2m.iiit.ac.in:443/~/in-cse/in-name/Team-31/Node-1/Data/la', {
        headers: {
            'X-M2M-Origin': '9mkeOXf9Xj:ECWmMtQzuE',
            'Content-type': 'application/json'
        }
    })
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => console.log(err));
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})