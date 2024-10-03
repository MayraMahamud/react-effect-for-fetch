import { useState, useEffect } from "react";
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, SetAdvice] = useState([]);
 
 useEffect(() => {
    fetch('https://api.adviceslip.com/')
    .then(response => response.json()).then(data => SetArtwork(data))
  }, []);
 
 
 
 
  return (
    <section>
      <h2>Advice Section</h2>
     <AdviceSlip></AdviceSlip>
  <section className="favourtite-slips-list">
  <FavouriteSlipsList></FavouriteSlipsList>
  </section>
    </section>
  )
}

export default AdviceSection
