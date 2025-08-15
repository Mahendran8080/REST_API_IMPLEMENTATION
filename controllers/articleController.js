const articleModel=require('../models/articleSchema');
//article geting
async function getArticle(req,res)
{

    try
    {
        const article=await articleModel.find();
        res.json(article)
    }
    catch(error)
    {
        res.json({success:false,message:error.message});
    }

}
//get article by id
async function getArticleById(req,res){
    try
    {
        const article=await articleModel.findById(req.params.id);
        if(!article)
            res.json({success:false,message:"Article is not found"});

        res.json(article);
    }
    catch(error)
    {
        res.json({success:false,message:error.message});
    }
}
//delete an article by ID
async function deleteArticleById(req,res)
{
    try
    {
        const article=await articleModel.findByIdAndDelete(req.params.id);
        if(!article)
        {
            res.json({success:true,message:"Article can not be found to Delete"});

        }
        res.json({success:true,message:"Article is deleted successfully"});
    }
    catch(error)
    {
         res.json({success:false,message:error.message});
    }
}
//update an existing article
async function updateArticleById(req,res){
    try
    {
        const updateArticle=await articleModel.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true,runValidators:true}
        );

        if (!updatedArticle) return res.json({success:false,message:"article not found"})
         res.json(updatedArticle);
    }
    catch(error)
    {
        res.json({success:false,message:error.message});
    }
}
 
//article creation 
async function createArticle(req,res)
{
    try
    {
        const {title,content,author}=req.body;//payloading concept

        const article=new articleModel({title,content,author});

        await article.save();

        res.json({success:true,message:"article created in the DB"});
    }
    catch(error)
    {
        res.json({success:false,message:error.message});

    }
}

module.exports={getArticle,createArticle,getArticleById,deleteArticleById,updateArticleById};