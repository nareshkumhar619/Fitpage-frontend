import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Mycontext } from './ContextApis';

function Details() {
    const { name } = useParams()
    const data = useContext(Mycontext)

    const filtered = data.filter((data) => data.name == name)
    console.log(filtered);
   
    const formatText = (txt, ele) => {
        let text = txt
        
        if(txt.includes("$1") && txt.includes("$2")){
            console.log(txt.split(/\$[1-4]/g));
            let strgarr = txt.split(/\$[1-4]/g);
            text = <p>{strgarr[0]} <Link to={`/${name}/indicator/${"$1"}`} className='text-blue-600 underline'>({ele?.variable?.$1.default_value}) </Link> {strgarr[1]} <Link to={`/${name}/${"$2"}`} className='text-blue-600 underline'>({ele?.variable?.$2.values[0]}) </Link> </p>


        }
        if(txt.includes("$2") && txt.includes("$3")){
            console.log(txt.split(/\$[1-4]/g));
            let strgarr = txt.split(/\$[1-4]/g);
            text = <p>{strgarr[0]} <Link to={`/${name}/${"$2"}`} className='text-blue-600 underline'>({ele?.variable?.$2.values[0]}) </Link> {strgarr[1]} <Link to={`/${name}/${"$3"}`} className='text-blue-600 underline'>({ele?.variable?.$3.values[0]}) </Link> </p>

        }
        if(txt.includes("$1") && !txt.includes("$2")){
                console.log( txt.split("$1"))
                const txtarr = txt.split("$1")  
                text = <p>{txtarr[0]}<Link to={`/${name}/${"$1"}`} className='text-blue-400 underline'>({ele?.variable.$1.values[0]})</Link>{txtarr[1]} </p>
        
        }
        if(txt.includes("$4") ){
          const txtarr = txt.split("$4")  
          text = <p>{txtarr[0]}<Link to={`/${name}/indicator/${"$4"}`} className='text-blue-400 underline'>({ele?.variable?.$4.default_value})</Link> {txtarr[1]} </p>
        }
        return text
    }
    
    return (
        <div className='flex items-center justify-center py-20'>
            <div className='bg-black text-white w-[500px] h-[300px]'>
                <div className='py-4 bg-[#1686b0] px-2 flex flex-col items-start justify-start'>
                    <p className='text-lg'>{filtered[0]?.name}</p>
                    <p style={{ color: filtered[0]?.color }} className={`text-sm   `}>{filtered[0]?.tag}</p>
                </div>
                <div className='py-4 px-2'>
                    {
                        <div>
                            {filtered[0]?.criteria.map((ele, ind) => (<div><p>{formatText(ele.text, ele)}</p> {(filtered[0]?.criteria.length > 1 && ind < 2) && <p className='text-xs'>and</p>}</div>))}
                        </div>
                    }
                </div>
            </div>


        </div>
    )
}

export default Details