const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');


const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const employerRoutes = require('./routes/employerRoutes')
const employeeRoutes = require('./routes/employeeRoutes')
const employerJobRoutes = require('./routes/jobRoutes')
const allJobsRoutes = require('./routes/allJobsRoutes')
const authDeleteRoutes = require('./routes/authDeleteRoutes')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/auth', authRoutes )
app.use('/api/auth/delete', authDeleteRoutes )
app.use('/api/employer', employerRoutes )
app.use('/api/employee', employeeRoutes )
app.use('/api/employer/jobs', employerJobRoutes )
app.use('/api/jobs', allJobsRoutes)
app.use('/images', express.static('images'));


app.get('/', (req, res)=>{
    res.send('my server api ')
})

mongoose.connect('mongodb+srv://marcomongo:mongomarco@marcosclusterno1.kzoqh.mongodb.net/Indeed?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to the database')
})
.catch((error) => { console.log(error)})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
console.log('server running')
})
