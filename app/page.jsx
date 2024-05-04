"use client"
import React, { useState, useEffect } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      // Simulate loading by toggling the isLoading state
      setIsLoading(prevLoading => !prevLoading);
    }, 1000); // Change the interval as needed

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default Home;


// import Image from "next/image";
// import Logo from "./utils/icons/Logo";
// import { ListBullets, CaretUp } from "@phosphor-icons/react/dist/ssr";


// export default function Home() {
//   return (
//     <main className="main">
      

//       <div className="leftsidebar">
//         <Logo />
//         <div className="leftsidebar__top">
//           <h2>Countries</h2>
//         </div>
//         <nav className="leftsidebar_nav">
//         <div className="leftsidebar_nav__top">
//           <ListBullets size={20} weight="bold" />
//           <CaretUp size={20} weight="bold" />
//         </div>
//           <a href="/congo">Congo</a>
//           <a href="/ethiopia">Ethiopia</a>
//           <a href="/kenya">Kenya</a>
//           <a href="/somalia">Somalia</a>
//           <a href="/south-sudan">South Sudan</a>
//           <a href="/sudan">Sudan</a>
//         </nav>
//       </div>

//     </main>
//   );
// }



