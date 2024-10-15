//Rate
import { useState } from 'react'
import { FaStar } from "react-icons/fa"

export default function Ratting(props){
   const [rate,setRate] = useState(null);
   const[hover,setHover] = useState(null);

    return(
        <>
            <div className='flex gap-1'>

            {[...Array(5)].map((star,index) =>{
                const currencyRating = index + 1;
                return(
                   
                    <label key={index} >
                        <input 
                        type="radio" 
                        nome="rate"
                        value={currencyRating}
                        onClick={()=>{setRate(currencyRating)}}
                        className='hidden'
                        />
                        <FaStar 
                        key={index}
                        className='cursor-pointer'
                        color={currencyRating <= (hover||star)? '#ffc107':'#e4e5e9'}
                        onClick={()=>setHover(currencyRating)}
                        />
                    </label>
                   
                )
                })}

            </div>
        </>
    )


}