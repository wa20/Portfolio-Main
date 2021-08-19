// import React, { useEffect, useState } from 'react'
// import { useQuery } from '@apollo/client';
// import { QUERY_PROJECT} from '../../utils/queries';
// import PortfolioCard from '../portfolio/portfolioCard'

// const MarketplaceResults = () => {
   
//     const { loading, data } = useQuery(QUERY_PROJECT);
  
//     // const [searchTerm, setSearchTerm] = useState("");
//     // const [filterChoice, setfilterChoice] = useState("name");
   
  
  
  
//     return (
//         <div> 
          
//           {state.products.length ? (
//             <div className="flex-row" style = {{maxWidth:"2000px", paddingLeft:"20%", paddingRight:"20%"}} >
//               {filterProducts().map((project) => (
//                   <MarketplaceCard
//                   key={project._id}
//                   _id={project._id}
//                   image={project.image}
//                   name={project.name}
//                   description={project.description}
//                   repo={project.repo}
//                   site={project.site}
//                   centered
//                   /> 
//             ))}
//             </div>
//           ) : (
//             <h3>You haven't added any products yet!</h3>
//           )}
          
//         </div>
//     );
//   };
  
//   export default MarketplaceResults;