const Mailgun = require('mailgun.js');
const formData = require('form-data');
require('dotenv').config();
const mailgun = new Mailgun(formData);
const mailConfig = require('../../config/mail');
const mg = mailgun.client({username: mailConfig.mailgun.USERNAME, key: mailConfig.mailgun.API_KEY});

class NotificationService {

async sendNotification(toEmail,params) {
    const data = {
      from: 'CitApp <noreply@citapp.ca>',
      to: toEmail,
      subject: 'CitApp Notification Services',
      ...params
    };
    await mg.messages.create(mailConfig.mailgun.DOMAIN, data)
  };

}

  module.exports = NotificationService;

