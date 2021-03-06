const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: './.env'})

const app = require('./app')

const DB = process.env.DB

mongoose.connect(DB).then(() => console.log('Successful Connection') )

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Running On Port ${port}`);
    console.log('Env: ', process.env.NODE_ENV)
})