import React from 'react'

function Card({src, alt, title}) {
  return (
    <div className='flex font-inconsolata'>
      <div className='flex flex-col justify-center items-center gap-3 text-[#FFFFFF] w-[200px] h-[200px] bg-[#221C3E] rounded-2xl'>
        <img src={src} alt={alt} />
        <h2 className='text-[24px] font-normal leading-[26px]'>{title}</h2>
      </div>
    </div>
  )
}

export default Card
