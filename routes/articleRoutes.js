const express=require('express');
const {getArticle,createArticle,getArticleById,deleteArticleById,updateArticleById} =require('../controllers/articleController');

const articleRouter=express.Router();


articleRouter.get('/',getArticle);
articleRouter.post('/',createArticle);

articleRouter.get('/:id',getArticleById);
articleRouter.delete('/:id',deleteArticleById);

//Update is not similiar like other https methods
articleRouter.put('/:id',updateArticleById);

//PUT /api/articles/66be8d19b9b9a35a6f46a9a3
//Body: { "title": "New title", "content": "Updated content" }





module.exports=articleRouter;


