const Blog = require("../models/Blog");

exports.updateBlog = async (req,res)=>{
    try{
        const {id} = req.params;
        const {title,summary,content} = req.body;
        if(!title || !summary || !content){
            return res.status(500).json({
                success:false,
                message:"all field required"
            })
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            {_id:id},
            {
                title:title,
                summary:summary,
                content:content,
            },
            { new:true }
        );

        res.status(200).json({
            success:true,
            updatedData : updatedBlog,
            message:"Blog updated successfully"
        })

    }catch(err){
        console.log("Blog updation failed"),
        res.status(500).json({
            success:false,
            error:err.message,
        })        
    }
}
