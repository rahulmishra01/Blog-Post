import React, { useEffect, useState } from 'react'

function axios() {
    const url = "https://react-6943a-default-rtdb.firebaseio.com/";
    const [data, setData] =useState("");

        useEffect(() =>
        {
            axios.get(url).then((result) => {
                setData(result.data)
            })
        })
        if(!data)return null;
  return (
    <div>axios</div>
  )
}

export default axios









