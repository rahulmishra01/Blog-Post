import React, { useState } from 'react';  

const Blog = (props) => {
  return (
    <div className='blog-post'>
    <h1>{props.title}</h1>
    <img src={props.imgsrc}/>
    <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry<br/> standard dummy text ever since the 1500s, when an<br/> unknown printer took a galley of type and scrambled it<br/> to make a type specimen book.</p>
    </div>
  )
}

export default Blog;