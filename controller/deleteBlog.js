const Blog = require("../models/Blog");

exports.deleteBlog = async (req,res)=>{
    try{
        const {id} = req.params;

        await Blog.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Blog deleted successfully",
        })

    } catch(error){
        console.log("something went wrong in deletion of Blog"),
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}