/* eslint-disable */
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path');
const CONFIG = require('./config');

const app = express()

app.use(history())
app.use('/', express.static(path.join(__dirname, CONFIG.distPath)))

app.get('/api/about', (req,res)=>{
  res.json({coucou: "salut "})
})

app.listen(CONFIG.PORT, ()=> console.log(`server est sur le port ${CONFIG.PORT}`))
/* eslint-disable */
