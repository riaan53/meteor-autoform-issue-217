if (Meteor.isClient) {
    AutoForm.addHooks(['insertBookForm','insertBookForm2'], {
    after: {
      insert: function(error, result) {
        if (error) {
          console.log("Insert Error:", error);
        } else {
          console.log("Insert Result:", result);

        }
      },
      update: function(error) {
        if (error) {
          console.log("Update Error:", error);
        } else {
          console.log("Updated!");
        }
      },
      remove: function(error) {
        console.log("Remove Error:", error);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
