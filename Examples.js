import mongoose  from "mongoose";
import Blog from "./model/Blog.js"

mongoose.connect("URI")


//EXAMPLE 1

//Create a new blog post Object 
//this rquires two actions (first we have to instanciate the object) &
// then save it with the .save() Method


const article = new Blog ({
    title: "Awesome Post",
    slug: "awesome-post",
    published: true,
    contennt: "Thid id the best post so far",
    tags: ["featured", "announcement"],

})


//insert the article in our MongoDB database

await article.save();
 

const firstArticle = await Blog.findOne({});
console.log(firstArticle);



//Alternatively this can be donewith one 
// action using the mongoose .create() method

const blogPost = await Blog.create({
    title: "Awesome Post",
    slug: "awesome-post",
    published: true,
    contennt: "Thid id the best post so far",
    tags: ["featured", "announcement"],

})


// to ulter the key-value pairs and saving it 

blogPost.title = "Lyon Nah Baba";

await blogPost.save()

console.log(blogPost);

//ALSO

const Booklet = await Blog.create({
    title: "The Boy that CODES",
    slug: "Good Article",
    author: "Lyon Mike",
    content: "One of the best ever",
    tags: ["Fearful, Fantastic"]
})

  console.log(booklet)


 //EXAMPLE 2

 
const blogFind = await Blog.findById
("631e696a26530c3d20a94e16").exec();
//This  below will return the title, slug and content
("631e696a26530c3d20a94e16", "title slug content").exec();


console.log(blogFind);


 //EXAMPLE 2

 const blogDelete = await Blog.deleteMany({ title: 'Lyon Nah Baba'}).exec();
// this above will delete all the posts with that specified title

 //EXAMPLE 3

 //As to obey the required filed from the Schema update

const blog = await Blog.create({
    title: "The Boy that CODES",
    slug: "Good Article",
    author: "Lyon Mike",
    content: "One of the best ever",
    tags: ["Fearful, Fantastic"]
})

  console.log(blog)


  
 //EXAMPLE 4

 const blogExists = await Blog.exists({ title: 'Lyon Nah Baba'}).exec();
console.log(blogExists)

 // this above will find if the post with scuh title eixts


 //EXAMPLE 5

 const blogWhere = await Blog.where("author").equals("Lyon Mike").select("content title")

console.log(blogWhere)

 // this above will find if the post with scuh title eixts



 
// Model Connection

const user = await User.create({
    name: "Lyon Mike",
    email: "tititopemike@gmail.com"
})



const article = await Blog.create({
    title: "Awesome Post 3",
    author: user._id,
    slug: "awesome-post",
    published: true,
    contennt: "Thid id the best post so far",
    tags: ["featured", "announcement"],

})

console.log(article);



//Populate method

const article = await Blog.findOne({title: "Awesome Post 3"}).populate("author")


console.log(article);
