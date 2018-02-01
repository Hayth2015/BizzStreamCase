import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

ClientLabels = new Mongo.Collection('client');

Template.maxedy.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.maxedy.helpers({
	clientName: function() {
		return ClientLabels.find({"_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415"});
	},
	clientAge: function() {
		return ClientLabels.find({"_id": "228b905f-4a43-4a40-b829-0c6a04ad4782"});
	}
});

Template.maxedy.events({
//	'click button'(event, instance) {
//},
'submit .form-inline'(event, instance) {
	labelName = event.target.labelForName.value;
	labelAge = event.target.labelForAge.value;

	ClientLabels.insert({
		name: labelName, 
		age: labelAge
	});

	event.target.labelForName.value = "";
	event.target.labelForAge.value = "";

	return false;
}
});
