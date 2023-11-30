import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from './ContextApis';
import { useParams } from 'react-router-dom';

function Params() {
    const data = useContext(Mycontext)
    
    const { name, id} = useParams(); 
    const [datavalue, setdatavalue] = useState([])
    useEffect(() => {
        const filterdata = data.find((item) => item.name == name);
        if (filterdata) {
          const dataArray = filterdata.criteria
            .filter((criterion) => criterion.variable.hasOwnProperty(id))
            .map((criterion) => criterion.variable[id].values);
    
          setdatavalue(dataArray); 
          console.log(dataArray )
        }
    }, []) 
    
     
  return (
    <div className='flex items-center justify-center py-20'>
            <div className='bg-black text-white w-[500px] h-[300px] px-4'>
        {
            datavalue.length >= 0 && datavalue[0]?.map((ele)=>(
                <div>
                    <p className='text-xl px-4 pt-2'>{ele}</p>
                    <div className='mx-4 border-dotted border-t-2 py-2'/>

                </div>
                
            ))
        }
    </div>
    </div>
  )
}

export default Params