

import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        lowercase: true
    },

    published:{
        type: Boolean,
        default: false
    },

    author: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },


    content: String,

    tags: [String],

    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },

    updatedAt: Date,

    comments: [{
        user:  {
            type: SchemaTypes.ObjectId,
            ref: "User",
            required: true
        },

        // user: String,

        content: String,
        votes: Number,
    }]
    
})

// before saving ("save"), execute the function

blogSchema.pre("save", function (next) {
    this.upadredAt = Date.now();
    next();
});

const Blog =  model ("Blog", blogSchema);

export default Blog;



/*
the first Schema Model

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogSchema = new Schema ({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number,
    }]
})

const Blog =  model ("Blog", blogSchema);

export default Blog;

*/