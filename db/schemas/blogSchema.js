const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide the title name of the blog'],
      minLength: [5, 'Title must be at least 3 letters'],
      maxLength: [100, 'Title is too long'],
    },
    picUrl: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = blogSchema;
