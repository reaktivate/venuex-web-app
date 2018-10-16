const functions = require('firebase-functions');
const admin = require('firebase-admin');

const sendPaymentReminderMail = require('./sendPaymentReminderMail');

admin.initializeApp(functions.config().firebase);

exports.sendPaymentReminderMail = sendPaymentReminderMail;
