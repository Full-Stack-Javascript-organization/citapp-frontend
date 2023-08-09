const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user');
const companyRoutes = require('./routes/company');
const serviceRoutes = require('./routes/service');
const calendarRoutes = require('./routes/calendar');
const cors = require('cors');
const NotificationService = require('./app/services/notificationService');


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



// app.get('/', (req,res) => {
//     res.send(`Hello There`); 
// })

app.get('/notify', async (req,res) => {

  const notification = new NotificationService();

  const toEmail = 'brero12@gmail.com'

  console.log('toEmail' + toEmail);

  await notification.sendNotification(toEmail,{
    subject: `CitApp Notification Services`,
    text: `This is a test for citapp notification service.`
  });
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});