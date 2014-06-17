meteor-autoform-issue-217
=========================

When adding the schema="BookSchema" to my quickForm the onscreen validation disappears. The insert still works if all fields are specified.

BookSchema is the same as the original schema as defined when the collection was created except the optional field "lastCheckOut" was removed and "summary" is made mandatory.
