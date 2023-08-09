const express = require('express');
const CalendarController = require('../app/contollers/calendarController');

const router = express.Router();
const calendarController = new CalendarController();



//router.get('/:id', calendarController.getCalendar.bind(calendarController));
router.post('/', calendarController.createCalendar.bind(calendarController));
router.put('/:id', calendarController.updateCalendar.bind(calendarController));
router.delete('/:id', calendarController.deleteCalendar.bind(calendarController));
router.get('/search', calendarController.getAllCalendarsByName.bind(calendarController));
router.get('/company/:id', calendarController.getAllCalendarById.bind(calendarController));
router.get('/', calendarController.getAllCalendars.bind(calendarController));




module.exports = router;