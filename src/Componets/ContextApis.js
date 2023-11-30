import React, { useState, useEffect, createContext,  } from 'react';
export const Mycontext = createContext();
const AppContext = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://nareshkumhar.onrender.com/api/data')
            .then((response) => response.json())
            .then((data) => setData(data))
            
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
   console.log("hi");
    return (
        <div>
        <Mycontext.Provider value={data}>
            {children}
        </Mycontext.Provider>
        </div>
    )

}
export default AppContext