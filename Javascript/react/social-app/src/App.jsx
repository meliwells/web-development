import { useState } from 'react'
import './App.css'

export default function App() {

  //State to manage posts
  const [posts, setPosts] = useState([]); //can pre-populate array exp ['This is a post, This is post 2']
  const [newPost, setNewPost] = useState('');  //useState between parantheses is the initial values in the variables


  //Function to add a post
  const addPost = () => {
    if (newPost.trim() === '') //trim is to disregard spaces, '' is for an empty string
      return;
      setPosts([{id: Date.now(), text: newPost}, ...posts]);
      setNewPost('');
  }

  return (
    <div>
      <h1>Simple Social Media App</h1>
      <textarea
        rows='3'
        placeholder='Write some words...'
        value={newPost} // this value is what is the const above newPost
        onChange={(e) => setNewPost(e.target.value)}  //update newPost variable when user puts in information
      />
      <br />
      <button onClick={addPost}>
        Add Post
      </button>

      {/* Display Posts */}

      <div>
        {posts.length === 0 ? <p>No posts available.</p> : null}  {/*if posts don't exist, the no posts is displayed. if posts available, nothing is displayed*/}
        {posts.map((post) => (
          <div key={post.id}>
            {post.text}
          </div>
        ))}
      </div>
    </div>
  )
}

