db.createCollection("post", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "comments", "author"],
      properties: {
        title: {
          bsonType: "string",
          description: "Must be a string and required",
        },
        text: {
          bsonType: "string",
          description: "must be a string and required",
        },
        comments: {
          bsonType: "array",
          description: "Must be any array and is required",
          items: {
            bsonType: "object",
            required: ["string", "author"],
            properties: {
              string: {
                bsonType: "string",
                description: "Must be a string and is required",
              },
              author: {
                bsonType: "objectId",
                description: "Is required",
              },
            },
          }
        },
        author: {
            bsonType: "objectId",
            description: "Should be an objectId and required",
          },
      },
    },
  },
});
