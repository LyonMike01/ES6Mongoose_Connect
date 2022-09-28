import mongoose  from "mongoose";
import Blog from "./model/Blog.js"
import User from "./model/User.js"

mongoose.connect("mongodb+srv://Lyonmike01:Perfectgen2mic@mycluster1.iee4evx.mongodb.net/?retryWrites=true&w=majority");

 
const article = await Blog.findById ("631e82796492a83373bcccdb").exec()

article.title = "Updated Title";
await article.save();

console.log(article);

