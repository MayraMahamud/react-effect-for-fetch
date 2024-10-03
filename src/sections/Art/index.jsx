import { useState, useEffect } from "react";
import ArtList from './components/ArtList';
import ArtListItem from './components/ArtListItem';
import PublicationHistoryList from './components/PublicationHistoryList';




function ArtsSection() {
  const [artwork, SetArtwork] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev//images/paris-street-rainy-day.jpg")
    .then(response => response.json()).then(data => SetArtwork(data))
  }, []);

  

  

 
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        <ArtList></ArtList>
   
        <div className="frame">
          <ArtListItem></ArtListItem>
       
        </div>
     </ul> 
        <h4>Publication History:</h4>
        <PublicationHistoryList></PublicationHistoryList>
        <ul>

    </ul>
</div>

    </section>
  );
};

export default ArtsSection
