import React from 'react';
import './css/style.css';
import imageDesktopLogo from './images/image-hero-desktop.png';
import imageMobileLogo from './images/image-hero-mobile.png';
import client2 from './images/client-audiophile.svg';
import client1 from './images/client-databiz.svg';
import client3 from './images/client-meet.svg';
import client4 from './images/client-maker.svg';
import LargeNavBar from './Components/LargeNavBar';
import SmallNavBar from './Components/SmallNavBar';
import DesignButton from './Components/Button';
import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <div className='grid grid-cols-12 px-10 pt-5 justify-between items-center lg:mb-10 mb-3'>
        <div className='col-span-1'><img src={logo} alt='' /></div>
        <div className='col-span-11'>
          <div className='lg:block md:hidden hidden'><LargeNavBar /></div>
          <div className='lg:hidden md:block block'><SmallNavBar /></div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-20 py-10'>
        <div className='col-span-2 m-auto lg:mx-[60px] mx-[20px] lg:order-1 order-2 lg:text-start text-center'>
          <h3 className='lg:text-[90px] text-[30px] font-bold leading-[80px] lg:me-10'>Make remote work</h3>
          <p className='lg:pt-10 lg:me-60'>Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</p>

          <div className='lg:mt-10 mt-5'>
            <DesignButton buttonText={'Learn More'} bgColor={'black'} textColor={'text-white'} hoverColor={'bg-white'} hover_text_color={'text-black'} />
          </div>
          <div className='flex justify-between lg:pt-20 pt-10 lg:me-24'>
            <div className='lg:mx-0 mx-3'>
              <img src={client1} alt='' />
            </div>
            <div className='lg:mx-0 mx-3'>
              <img src={client2} alt='' />
            </div>
            <div className='lg:mx-0 mx-3'>
              <img src={client3} alt='' />
            </div>
            <div className='lg:mx-0 mx-3'>
              <img src={client4} alt='' />
            </div>
          </div>
        </div>
        <div className='col-span-1 lg:order-2 order-1'>
          <img src={imageDesktopLogo} alt='' className='lg:block md:hidden hidden' />
          <img src={imageMobileLogo} alt='' className='lg:hidden md:block block' />
        </div>
      </div>
    </div>
  );
}

export default App;
