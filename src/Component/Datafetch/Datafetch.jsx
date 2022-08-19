// import { getByTitle } from '@testing-library/react';
import React, { useState, useEffect } from "react";
// import './Datafetch.css'

import axios from "axios";

export const UsersData = () => {
  // const Planets = ()  => {
  // const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-07-19&sortBy=publishedAt&apiKey=a5e5026a79674a2086ffa13d58a3d269"
      )
      .then((res) => {
        console.log(res.data.articles);
        setPlanets(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <h1>All News</h1>
    <section className=' container news_container'>
      {planets.map((item, index) => {
        // return <div>{item.title}</div>

        return(
          <article className='news_article' key={item.url}>
          <img src={item.urlToImage} alt="" className='news_image' />
          <h3>1.{item.title}</h3>
          <h5>2.{item.description}</h5>
          <h5>3.{item.publishedAt}</h5>
          <h4>4.{item.author}</h4>
      </article>
         )
      })}
     </section>
     </>
  );
};
