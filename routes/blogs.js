const express = require("express");
const router = express.Router();

const {createBlog} = require("../controller/createBlog")

const {getBlogs,getBlogById} = require('../controller/getBlog');
const {updateBlog} = require('../controller/updateBlog');
const {deleteBlog} = require("../controller/deleteBlog");

//define API routes


router.post('/createBlog',createBlog);
router.get("/getBlogs",getBlogs);

router.get('/getBlog/:_id',getBlogById);

router.put('/updateBlog/:id',updateBlog);
router.delete('/deleteBlog/:id',deleteBlog);


module.exports = router;