// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL, Units, CivImport } from "../utils/api";


// const CivURL = BASE_URL + CivImport;

// const CivList = () => {
//         const [data, setData] = useState([]);
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState(null);


//         useEffect(() => {
//             async function fetchData() {
//                     try {
//                         const response = await fetch(BASE_URL);

//                         if (response.ok) {
//                             const json = await response.json();
//                             console.log(json);
//                             setData(json);
//                         } else {
//                             setError("An error occured");
//                         }
//                     } catch (error) {
//                          setError(error.toString());
//                     } finally {
//                         setLoading(false);
//                     }
//             }
//             fetchData();
//         }, []);

//         if (loading) {
//             return <div>Loading...</div>;
//         }

//         if (error) {
//             return <div>An error occured: {error}</div>;
//         }

//         return (
//                 <>
//                         {data.map((wiz) => {
//                             return (
//                             <>
//                                 <h4 key={wiz.id}>Firstname: {wiz.firstName}</h4>
//                                 <h4>Lastname: {wiz.lastName}</h4>
//                             </>
//                             )
//                         })}
//                 </>
//         );
// }

// export default CivList;