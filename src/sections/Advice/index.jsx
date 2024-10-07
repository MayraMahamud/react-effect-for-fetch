import { useState, useEffect } from "react";
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, SetAdvice] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.adviceslip.com/');
      const jsonData = await response.json();
      SetAdvice(jsonData);
    };
    fetchData();
  }, []);

 
 
 
 
  return (
    <section>
      <h2>Advice Section</h2>
   /  
  <section className="favourtite-slips-list">

  </section>
    </section>
  )
}

export default AdviceSection
