import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='navbar'>
      <div className='nev-bg'>
      <img style={{position:"relative"}} src='blog.jpg' alt='image'/>
       <Link className='link' to="blog">Blog</Link><br/>
       <h3>React Blog</h3>
      </div>
       
        <div className='back'><div className='box-text'><h1>Blog Post</h1></div></div>
    </div>
  )
}

export default Home;