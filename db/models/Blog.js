//  external import
const mongoose = require('mongoose');

//  internal import
const blogSchema = require('../schemas/blogSchema');

const Blog = mongoose.models.Blog || new mongoose.model('Blog', blogSchema);

module.exports = Blog;
