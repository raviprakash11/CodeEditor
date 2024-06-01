// // hooks/useCustomHook.ts

// import { useState, useEffect } from "react";

// const useCustomHook = (endpoint: string) => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(endpoint);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError("error?.message");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [endpoint]);

//   return { data, loading, error };
// };

// export default useCustomHook;
