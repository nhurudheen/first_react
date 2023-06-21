import React from 'react'
import DesignButton from './Button';
const LargeNavBar = () => {
  return (
    <div>
        <div className='flex justify-between items-center ms-10'>
            <div className=' space-x-10'>
                <span className=' text-sm'>Features</span>
                <span className=' text-sm'>Company</span>
                <span className=' text-sm'>Careers</span>
                <span className=' text-sm'>About</span>
            </div>
            <div className='flex justify-between space-x-10 items-center'>
               <div className=' text-sm'>Login</div>
               <div className=''>
                
            <DesignButton buttonText={'Register'} bgColor={'white'} textColor={'black'} hoverColor={'bg-black'} hover_text_color={'text-white'} />
               </div>
            </div>
        </div>
    </div>
  )
}

export default LargeNavBar