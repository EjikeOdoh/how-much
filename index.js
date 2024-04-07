const express = require('express');

const app = express();

app.get('/',(req, res)=>{
return res.json({
    localRice:1800,
    beans:1700,
    nigerianRice:2200

})
})

app.listen(3000, ()=>console.log('Server spinning'))