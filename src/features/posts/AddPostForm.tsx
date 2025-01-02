import React from "react";

import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch } from "@/app/hooks";

import { type Post, postAdded } from "./postsSlice";
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    // Prevent server submission
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    const newPost: Post = {
      id: nanoid(),
      title,
      content,
    };
    dispatch(postAdded(newPost));

    e.currentTarget.reset();
  };

  return (
    <section className="flex flex-col max-w-80 p-6 justify-center items-center mx-auto bg-sky-200 border border-blue-500 rounded-xl">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};
