import { useState, useEffect } from "react";
import ArtList from './components/ArtList';
import ArtListItem from './components/ArtListItem';
import PublicationHistoryList from './components/PublicationHistoryList';




function ArtsSection() {
  const [artwork, SetArtwork] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/art');
      const jsonData = await response.json();
      SetArtwork(jsonData);
    };
    fetchData();
  }, []);

  

  

 
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
      <ArtList artwork={artwork}/>
   
        <div className="frame">
       
       
        </div>
     </ul> 
        <h4>Publication History:</h4>
       {/* <PublicationHistoryList></PublicationHistoryList>****/}
        <ul>

    </ul>
</div>

    </section>
  );
};

export default ArtsSection
