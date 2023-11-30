import React, { useContext } from 'react'
import { Mycontext } from './ContextApis';
import { Link } from 'react-router-dom';

function StockList() {
    const data = useContext(Mycontext)
  return (
    <div className=' text-white flex items-center justify-center py-20'>
        <div className='bg-black px-2 py-6 w-[500px]'>

        { 
            data.map((data)=>(
                <Link to={`/${data.name}`} >
                    <div className='hover:opacity-40'>
                   <p className='px-4 text-lg'>{data.name}</p> 
                   <p style={{color:data.color}} className={`px-4 text-sm  py-2`}>{data.tag}</p>
                    </div>
                   <div className='mx-4 border-dotted border-t-2 py-2'/>
                </Link>
            ))
        }
        </div>
    </div>
  )
}

export default StockList