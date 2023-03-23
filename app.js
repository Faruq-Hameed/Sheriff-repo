import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import URI from './atlas_uri.mjs'
import Blog from './model/Blogs.mjs';

const app = express();
const port = config.get('server.port')
const host = config.get('server.host')

mongoose.connect(URI)
    .then(result => {
        console.log('connected to database successfully');
    }).catch(err => {
        console.log('error connecting to database')
    })


const article = await Blog.findById('64005daf14226c2216954dce', "title slug content")
//     article.title = 'changed title'
        article.slug = 'changed slug'
    await article.save();
    console.log(article)

    const del1 = await Blog.deleteOne({ author: "Jesse Hall" })
    console.log({del1})
    
    const del2 = await Blog.deleteMany({ author: "Jesse Hall" })
    console.log({del2})

// Create a new blog post object
// const article = new Blog({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
// });

// // Insert the article in our MongoDB database
// article.title = 'new_article_title'
// await article.save();
// console.log(article);

// // Find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

// Create a new blog post and insert into database

// const new_article = await Blog.create({
//     title: 'Awesome Post3!',
//     slug: 'awesome-post3',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
// })



// Find a single blog post
// const allArticles = await Blog.find({});
// console.log({allArticles});


const server = app.listen(port, host, (err) =>{
    if (err){
        console.error(err.message);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${server.address().port}`);

})

