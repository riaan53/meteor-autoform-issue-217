Books = new Meteor.Collection("books", {
    schema: {
        title: {
            type: String,
            label: "Title",
            max: 200
        },
        author: {
            type: String,
            label: "Author"
        },
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        },
        lastCheckedOut: {
            type: Date,
            label: "Last date this book was checked out",
            optional: true
        },
        summary: {
            type: String,
            label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
});

//Schema with summary removed and summary made required.
BookSchema = new SimpleSchema({
      title: {
        type: String,
        label: "Title",
        max: 200
      },
      author: {
        type: String,
        label: "Author"
      },
      copies: {
        type: Number,
        label: "Number of copies",
        min: 0
      },
      summary: {
        type: String,
        label: "Brief summary",
        max: 1000
        }
});
