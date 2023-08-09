const CalendarRepository = require('../repositories/caledarRepository');

class CalendarService {
  constructor() {
    this.calendarRepository = new CalendarRepository();
  }

  async createCalendar(calendarData) {
    try {
      return await this.calendarRepository.createCalendar(calendarData);
    } catch (err) {
      throw new Error('Failed to create calendar');
    }
  }

  async getCalendar(calendarId) {
    try {
      return await this.calendarRepository.getCalendar(calendarId);
    } catch (err) {
      throw new Error('Failed to get calendar');
    }
  }

  async getAllCalendars() {
    try {      
      await new Promise(r => setTimeout(r, 2000));
      return await this.calendarRepository.getAllCalendars();
    } catch (err) {
      throw new Error('Failed to get calendars');
    }
  }

  async updateCalendar(calendarId, calendarData) {
    try {
      return await this.calendarRepository.updateCalendar(calendarId, calendarData);
    } catch (err) {
      throw new Error('Failed to update calendar');
    }
  }

  async deleteCalendar(calendarId) {
    try {
      return await this.calendarRepository.deleteCalendar(calendarId);
    } catch (err) {
      throw new Error('Failed to delete calendar');
    }
  }

  async getCalendarByName(name) {
    try {
      const filter = { name: name }; 
      return await this.calendarRepository.getCalendar(filter);
    } catch (err) {
      throw new Error('Failed to get calendar');
    }
  }
  
  async getAllCalendars(name, id) {
    try {
      const filter = {};
      
      if (name) {
        filter.name = name;
      }
      
      if (id) {
        filter.id = id;
      }
      return await this.calendarRepository.getAllCalendars(filter);
    } catch (err) {
      throw new Error('Failed to get calendars');
    }
  }
}

module.exports = CalendarService;