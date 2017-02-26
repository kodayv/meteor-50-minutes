/**
 * Created by koday on 2/25/2017.
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient){
  Template.tasks.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  })
}

if (Meteor.isServer) {

}
