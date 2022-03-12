const express = require('express')
const app = express()
const consign = require('consign')

app.set('view engine', 'ejs')
app.set('views', './src/views')

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);


const server = app.listen(3000, () =>{
    const port = server.address().port;
    console.log(`Servidor esta ativo na porta: ${port}`)
});