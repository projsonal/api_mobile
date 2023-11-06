const express = require('express')
const usersRoutes = require('./routes/users')
const res = require('express/lib/response')
const middlewareLogReq = require('./middleware/logs')
const app = express()

app.use(middlewareLogReq);
app.use(express.json())

app.use('/users',usersRoutes)



app.listen(4000,()=>{
    console.log('server is running on port 4000')
})