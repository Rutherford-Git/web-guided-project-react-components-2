// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData from '../dummy-data/friends'


export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
 const [friends, setfriends] = useState(friendsData)
  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
 const [search, setSearch] = useState('')
  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
const changeStatus = (id) => {
  
  const updateFriends = friends.map(fe => {
  if (fe.id === id) {
    return {...fe, married: !fe.married}; 
  } else {
   return fe;
  }
 })
 setfriends(updateFriends);
}
  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
const getFilteredFriends = () => {
  const toNormalized = search.trim().toLocaleLowerCase();
  if (!toNormalized) return friends;
  const filteredFriends = friends.filter( fri => {
    return fri.name.toLocaleLowerCase().includes(toNormalized);
  })
  return filteredFriends
}
  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search setSearch={setSearch}/>
      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={getFilteredFriends()} changeStatus={changeStatus}/>
    </div>
  )
}
