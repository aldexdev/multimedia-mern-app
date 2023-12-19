/* LISTS OF CALLBACK FUNCTIONS */
/* They gonna be executed while the associated router is called */

import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

// get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create a new post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update a post changing info
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No posts found with id: ${_id}`);
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};

// remove a post doc
export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No posts found with id: ${id}`);
  }
  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully!" });
};

// update the like count while liking a post
export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) {
    return res.json({ message: "User not valid to make the action!" });
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No post with id: ${_id}`);
  }

  const post = await PostMessage.findById(_id);

  // the user already like the post
  const index = post?.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    // like the post
    post?.likes.push(req.userId);
  } else {
    // dislike the post
    post.likes = post?.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
