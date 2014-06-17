if (Meteor.isClient) {
    AutoForm.addHooks(['insertBookForm'], {
    after: {
      insert: function(error, result) {
        if (error) {
          console.log("Insert Error:", error);
        } else {
          console.log("Insert Result:", result);

        }
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
