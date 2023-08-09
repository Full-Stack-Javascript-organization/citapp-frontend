const Calendar = require('../../models/calendar');

class CalendarRepository {
  async createCalendar(calendarData) {
    try {
      const calendar = new Calendar(calendarData);
      await calendar.save();
      return calendar;
    } catch (err) {
        console.log(`findOne error--> ${err}`);
      throw new Error('Failed to create calendar');
    }
  }

  async getCalendar(calendarId) {
    try {
      const calendar = await Calendar.findById(calendarId);
      return calendar;
    } catch (err) {
      throw new Error('Failed to get calendar');
    }
  }

  async getAllCalendars() {
    try {
      const calendars = await Calendar.find();
      return calendars;
    } catch (err) {
      throw new Error('Failed to get calendars');
    }
  }

  async updateCalendar(calendarId, calendarData) {
    try {
      const calendar = await Calendar.findByIdAndUpdate(calendarId, calendarData, { new: true });
      return calendar;
    } catch (err) {
      throw new Error('Failed to update calendar');
    }
  }

  async deleteCalendar(calendarId) {
    try {
      const calendar = await Calendar.findByIdAndDelete(calendarId);
      return calendar;
    } catch (err) {
      throw new Error('Failed to delete calendar');
    }
  }

  async getCalendar(filter) {
    try {
      const calendar = await Calendar.findById(filter);
      return calendar;
    } catch (err) {
      throw new Error('Failed to get calendar');
    }
  }

  async getAllCalendars(filter) {
    try {
      const calendars = await Calendar.find(filter);
      return calendars;
    } catch (err) {
      throw new Error('Failed to get calendars');
    }
  }
}

module.exports = CalendarRepository;