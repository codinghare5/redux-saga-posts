import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost } from './Posts.actions';

const Posts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [posts, setPosts] = useState([]);

  const posts = useSelector(state => state.posts.posts)

  const renderedPosts = posts?.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.body.substring(0, 100)}</p>
    </article>
  ))

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getPosts())
        }}
      >
        Get Posts
      </button>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='title'
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='description'
      />
      <button
        onClick={() => {
          dispatch(addPost({ title, description }));
        }}
      >
        Add Item
      </button>
      {renderedPosts}
    </div>
  );
};

export default Posts;