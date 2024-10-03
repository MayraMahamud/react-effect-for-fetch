import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({ users }) {

  return (
    <ul className="users-list">
   {
    users.map((user, index) => (
      <UsersListItem user={user} key={index}/>
    ))
   /* users.map((user, index) => (<UsersListItem user={user} key={index}/>))*/
   }
  </ul>
  )
}

export default UsersList