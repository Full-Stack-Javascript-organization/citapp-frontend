const CalendarService = require('../services/calendarService');

class CalendarController {
  constructor() {
    this.calendarService = new CalendarService();
  }

  

  async getAllCalendars(req, res) {
    try {
      console.log("Before Await");
      const calendars = await this.calendarService.getAllCalendars();
      console.log("After Await");
      res.json(calendars);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createCalendar(req, res) {
    try {
      const calendarData = req.body;
      const calendar = await this.calendarService.createCalendar(calendarData);
      res.json(calendar);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCalendar(req, res) {
    try {
      const calendarId = req.params.id;     
      const calendar = await this.calendarService.getCalendar(calendarId);
      res.json(calendar);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateCalendar(req, res) {
    try {
      const calendarId = req.params.id;
      const calendarData = req.body;
      const updatedCalendar = await this.calendarService.updateCalendar(calendarId, calendarData);
      res.json(updatedCalendar);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteCalendar(req, res) {
    try {
      const calendarId = req.params.id;
      const deletedCalendar = await this.calendarService.deleteCalendar(calendarId);
      res.json(deletedCalendar);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCalendarByName(req, res) {
    try {
      const name = req.params.name;// Assuming the parameter is 'name'      
      const calendar = await this.calendarService.getCalendarByName(name);
      res.json(calendar);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllCalendarsByName(req, res) {
    try {
      const { name, companyid } = req.query;            
      const calendars = await this.calendarService.getAllCalendars(name, companyid);
      res.json(calendars);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async getAllCalendarById(req, res) {
    try {
      const companyid = req.params.id;          
      const calendars = await this.calendarService.getAllCalendarById(companyid);
      res.json(calendars);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CalendarController;