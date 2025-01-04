const Blog = require("../models/Blog");

exports.createBlog = async(req,res)=>{
    try{
        //extract title and description from req's body
        const {title,summary,content} = req.body;
        //validation
        if(!title || !summary || !content){
            return res.status(500).json({
                success:false,
                message:"all field required"
            })
        }
        //create a new Todo obj and insert in DB
        const response = await Blog.create({title,summary,content});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry of Blog created successfully',
        })
    }
    catch(err){
        console.error("error is in create to do : ",err.message);
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
