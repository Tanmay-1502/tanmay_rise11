import React from 'react'
import yellow from '../images/yellow.jpg'
import aa from '../images/aa.png'
import bb from '../images/bb.png'


function Bottom() {

  
  return (
    <div className='bg-gray-100 flex flex-col mt-24 sm:mt-0  sm:flex-row items-center justify-center  '>
      {/* <div className='hidden sm:inline'> */}
      
      <div className=' sm:flex flex-col flex-grow p-10 items-center justify-center space-y-3  '>
        <text className='text-center'>
    Welcome to our new website
        </text>
         <img className='rounded p-6' height={300} width={300}  src={yellow}  alt="yellow"/>
     
     <a href='https://flywith.virginatlantic.com/'>
       <text className='text-center underline underline-offset-2'>
         LEARN ABOUT VIRGINAMERICA.COM
        </text>
        </a>
        </div>
      <div  className=' hidden sm:flex flex-col flex-grow p-10  items-center justify-center space-y-3 '>
      <text className='text-center'>
          Deals from $49 to your favourite cities
          </text>
      <img className='' src={aa} height={300} width={300}  alt="a"/>
       
      <a href='/deals'> <text className='text-center underline underline-offset-2'>
          SEE ALL DEALS
        </text>
        </a> 
        </div>
        <div  className='hidden md:flex flex-col flex-grow p-10  items-center justify-center space-y-3 '>
      <text className='text-center'>
          Power to people
          </text>
      <img src={bb} height={300} width={300}  alt="a"/>
       
       <a href='/review'>
        <text className='text-center underline underline-offset-2'>
          LEAVE A REVIEW
        </text>
        </a>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Bottom