const mongoose = require('mongoose');
const blogSchema = require('../schemas/blogSchema');

const Blog = mongoose.models.Blog || new mongoose.model('Blog', blogSchema);

module.exports = Blog;
