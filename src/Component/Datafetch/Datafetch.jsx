import { getByTitle } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
// import './Datafetch.css'


export const UsersData = () => {

  const [Users, fetchUsers] = useState([])
  const [id, setId] = useState()

  const getData = () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-07&sortBy=publishedAt&apiKey=a5e5026a79674a2086ffa13d58a3d269')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <ul>
        {Users.data?.articles?.map(User => (
          <li key={User.id}>{User.author}</li>
        ))}
      </ul>
    </div>
  )
       
}