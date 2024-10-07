import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({ artwork }) {
console.log(artwork)
  return (
    <ul className="art-list">
   {
    artwork.map((art, index) => (
      <ArtListItem art={art} key={index}/>
    ))
   
   }
  </ul>
  )
}
export default ArtList