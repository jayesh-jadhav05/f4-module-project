import React from 'react'
import { useSelector } from 'react-redux';

const Item = () => {
  const data = useSelector(state => state.detailproduct[0]);
  console.log(data)
  return (
    <>
      <div className='item'>
        <h2>{`Details Page For Post With ID ${data.id}`}</h2>

        <div className='Product'>
          <img src={`https://picsum.photos/200?random=${data.id}`} alt={data.title} />
          <h3>User ID : {data.userId}</h3>
          <h4>Title : {data.title}</h4>
          <p><b>Body</b> : {data.body}</p>
        </div>
      </div>
    </>
  )
}

export default Item