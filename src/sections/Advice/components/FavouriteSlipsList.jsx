import React from 'react'

function FavouriteSlipsList({ slips }) {
  
  return (
    <section class="favourtite-slips-list">
   {
    users.map((user, index) => (
      <UsersListItem user={user} key={index}/>
    ))
   
   }
  </section>
  )
}

export default FavouriteSlipsList