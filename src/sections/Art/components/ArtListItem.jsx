import React from 'react'

function ArtListItem({ art }) {
  console.log(`${'https://boolean-uk-api-server.fly.dev/art'}${art.imageURL}`);
  return (
    <li className='art-item' >
    <img
     src={`${'https://boolean-uk-api-server.fly.dev/'}${art.imageURL}`}
      
    />
    <h3>{art.title}</h3>


    <p>Artist: {art.artist}</p>
    <h4>Publication History: </h4>
    <ul>
      {art.publicationHistory}
    </ul>

</li>
   // src={`${'https://boolean-uk-api-server.fly.dev/art'}${art.imageURL}`}
    
    
    
    
    
    
 
  )
}

export default ArtListItem