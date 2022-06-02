import React from 'react'
import Blog from './Blog';
import Array from './date';
console.log(Array[2])
function Copy() {
 
    return (
    <div className='Post'>
    <Blog imgsrc={Array[0].image} title={Array[0].name}/>
    <Blog imgsrc={Array[1].image}  title={Array[1].name} />
    <Blog imgsrc={Array[2].image}  title={Array[2].name}/>
    <Blog imgsrc={Array[3].image}  title={Array[3].name}/>
    <Blog imgsrc={Array[4].image} title={Array[4].name}/>
    <Blog imgsrc={Array[5].image}  title={Array[5].name}/>


    </div>
  )
}

export default Copy;