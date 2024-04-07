const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/',(req, res)=>{
return res.json({
    localRice:1800,
    beans:1700,
    nigerianRice:2200,
    egusi:2500,


})
})

app.listen(3000, ()=>console.log('Server spinning'))