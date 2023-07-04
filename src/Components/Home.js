import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/actionType";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import detailsPage from '../redux/actions/singleProduct';
const Home = () => {

  const { loading, products, error } = useSelector(state => state.productList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log(products);

  if(loading){
    return <div>Loading...</div>
  }
  
  if(error){
     return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
     <Header />
      <div className='home'>
        <div className='grid-container'>
          {
            products.map((product) => {
              return (
               
                <NavLink to={`/item/${product.id}`} className='single-card' onClick={() => dispatch(detailsPage(product))}>
                  <div className='card'>
                   <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.title}/>
                    <h3>User ID : {product.userId}</h3>
                    <h4>Title : {product.title}</h4>
                    <p>Body : {product.body}</p>
                    <NavLink to={`/item/${product.id}`}>Read More...</NavLink>
                  </div>
                  </NavLink>
              )
            })
          }
        </div>

      </div>
    </React.Fragment>

  )
}

export default Home