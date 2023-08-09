const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user');
const companyRoutes = require('./routes/company');
const serviceRoutes = require('./routes/service');
const calendarRoutes = require('./routes/calendar');
const cors = require('cors');

//const bodyParser = require('body-parser');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//app.use(bodyParser);

connectDB();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/company', companyRoutes);
app.use('/service', serviceRoutes);
app.use('/calendar', calendarRoutes);



app.get('/', (req,res) => {
    res.send(`Hello There`); 
})

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});