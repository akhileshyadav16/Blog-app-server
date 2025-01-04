
const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  try {
    //fetch all item from DB
    const blogs = await Blog.find({});
    //response
    res.status(200).json({
      success: true,
      data: blogs,
      message: "Entire Todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "something went wrong in fetching all blogs",
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    //extract item by id
    const {_id} = req.params;
    const blog = await Blog.findById(_id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "No data Found with given id",
      });
    }
    res.status(200).json({
      success: true,
      message: `Data is found by given id: ${_id}`,
      data: blog,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "something went wrong in get blog",
    });
  }
};
