import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nev-bg'>
      <img src='blog.jpg' alt='image'/>
       <Link className='tlink' to="home">Home</Link><br/>
       <Link className='link' to="blog">Blog</Link>
       <h3>React Blog</h3>
      </div>
       
        <div className='back'><div className='box-text'><h1>Blog Post</h1></div></div>
    </div>
  )
}

export default Navbar;