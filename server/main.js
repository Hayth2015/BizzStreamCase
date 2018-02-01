import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  ClientLabels = new Mongo.Collection('client');

});

