import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Mycontext } from './ContextApis'

function Indicator() { 
    const { name,indicator,id} = useParams()
    const [datavalue, setdatavalue] = useState([])
    const data = useContext(Mycontext)

    useEffect(() => {
        const filterdata = data.find((item) => item.name == name);
        if (filterdata) {
          const dataarr = filterdata.criteria
            .filter((criterion) => criterion.variable.hasOwnProperty(id))
            .map((criterion) => criterion.variable[id]);
    
          setdatavalue(dataarr); 
        }
    }, [])
    console.log(datavalue); 
  return (
    <div className='flex items-center justify-center py-20'>
            <div className='bg-black text-white w-[500px] h-[300px] py-4'>
                <p className='text-xl px-4'>{datavalue[0]?.study_type}</p>
                <p className='px-4'>Set Parameters</p>
                <div  className='px-4 flex justify-between bg-white text-black pb-4 pt-1'>
                    <p>period</p>
                    <input className='text-black border-2 outline-6 ' type="text" value={datavalue[0]?.default_value} />
                </div>
            </div>
    </div>
  )
}

export default Indicator