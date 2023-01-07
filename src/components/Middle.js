import React from 'react'
import Select from 'react-select'
function Middle() {
  
  const options = [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Las Vegas', label: 'Las Vegas' },
    { value: 'Palm Springs', label: 'Palm Springs' },
    { value: 'Portland', label: 'Portland' },
  ]
  
  return (
    <div className='flex flex-col sm:mt-2 md:mt-4 sm:mb-10 md:mb-20 bg-white'>
      <div className=' flex flex-row items-center justify-center space-x-10 md:space-x-4  text-center mt-2 sm:mt-0  '>
       <div> <input  type="radio" value="Round" name="rt"  /><text className='ml-2'>Round Trip</text></div>
      <div><input  type="radio" value="One" name="rt" /><text className='ml-2'>One Way</text></div>  
      <div><input  type="radio" value="Multi" name="rt"  /> <text className='ml-2'>Multi City</text></div>  
      </div>
     
      <hr class="bg-gray-300 mx-14 sm:mx-28 md:h-1 md:mx-96  my-2 md:bg-gray-200 md:border-0"></hr>
       <div>

      
      <div className='flex flex-row flex-grow items-center justify-center mt-2 sm:mt-5 md:mt-14 text-3xl text'>
        Book from 
     <text className='text-violet-700'> <Select  className='text-violet-700'  options={options} placeholder="San Francisco"  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 'transparent',
      color: 'purple',
      borderColor: state.isFocused ? 'transparent' : 'transparent',
      text: 'purple'
    }),
  }} />
  </text>  
         to
      </div>

  <div className='grid grid-rows-3 grid-flow-col gap-4 sm:grid-rows-2 md:grid-rows-1 mt-10 sm:mt-2 mx-5 sm:mx-10 md:mx-28'>
      {/* <div className=' hidden md:flex flex-row  mx-24 space-x-4 justify-center my-2  ' > */}
        

        
      <div className='border-2 border-gray-400 flex flex-col flex-grow cursor-pointer'>
        <text className='px-1 mt-3 font-bold text-violet-700'>
 LAS VEGAS
        </text>
        <text className='mb-3 p-1' >
  NV(LAS)
        </text>
      </div>
      <div className='border-2 border-gray-400 flex flex-col flex-grow cursor-pointer'>
        <text className=' px-1 mt-3 font-bold text-violet-700 '>
 LOS ANGELES
        </text>
        <text className=' px-1 mb-3'>
  CA(LAX)
        </text>
      </div>
     

      
      <div className='border-2 border-gray-400 flex flex-col flex-grow cursor-pointer'>
        <text className=' px-1 mt-3 font-bold text-violet-700'>
 NEW YORK CITY
        </text>
        <text className='px-1 mb-3'>
  NY(NYC)
        </text>
      </div>
      <div className='border-2 border-gray-400 flex flex-col flex-grow cursor-pointer'>
        <text className=' px-1 mt-3 font-bold text-violet-700' >
 PALM SPRINGS
        </text>
        <text className=' px-1 mb-3'>
  CA(PSP)
        </text>
      </div>


      
      <div className='border-2 border-gray-400 flex flex-col flex-grow cursor-pointer'>
        <text className=' px-1 mt-3 font-bold text-violet-700'>
 PORTLAND
        </text>
        <text className='px-1 mb-3'>
  OR(POX)
        </text>
      </div>
      <div className='border-2 border-gray-400 flex flex-col flex-grow'>
        <text className='px-1 mt-3 font-bold text-violet-700'>
 All Cities
        </text>
        <text className=' px-1 mb-3 text-violet-700 font-bold'>
  <Select options={options} placeholder=" " styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 'transparent',
      color: 'purple',
      borderColor: state.isFocused ? 'transparent' : 'transparent',
    }),
  }}  />
        </text>
      </div>
      </div>
      </div>
    
     
    </div>
  )
}

export default Middle
