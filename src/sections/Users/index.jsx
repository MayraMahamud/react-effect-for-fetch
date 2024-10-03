import { useState, useEffect } from "react";
import UsersList from './components/UsersList';

function UsersSection() {
  const [users, SetUsers] = useState([]);


 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/MayraMahamud/contact');
      const jsonData = await response.json();
      SetUsers(jsonData);
    };
    fetchData();
  }, []);


  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"> 
<UsersList users={users}/>
      </div>
      

    </section>
  )
}

export default UsersSection
