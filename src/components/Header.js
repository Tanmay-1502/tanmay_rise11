import React  from 'react'
import american from '../images/america.png'
import { slide as Menu } from 'react-burger-menu'



function Header() {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '20px',
      top: '18px',
      bottom: '18px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  var styles2={
    bmBurgerButton: {
       position: 'fixed',
      width: '36px',
      height: '30px',
     right: '20px',
      top: '18px',
      bottom: '18px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
    <div className='flex flex-row bg-gradient-to-r h-15 from-purple-500 via-pink-500 to-red-500 justify-between items-center text-white '>
     
       
      <div className='justify-start sm:hidden items-center ' >
      <Menu styles={ styles } className='justify-center flex flex-col'>
        <a id="book" className="menu-item" href="book">BOOK</a>
        <br/>
        <a id="check" className="menu-item" href="/check">CHECK IN</a>
        <br/>
        <a id="manage" className="menu-item" href="/manage">MANAGE</a>
        <br/>
        <a id="deals" className="menu-item" href="/deals">DEALS</a>
        <br/>
        <a id="fly" className="menu-item" href="/fly">FLYING WITH US</a>
        <br/>
        <a id="where" className="menu-item" href="/where">WHERE WE FLY</a>
        <br/>
        <a id="shop" className="menu-item" href="/shop">SHOP</a>
        <br/>
        <a id="faq" className="menu-item" href="/faq">FAQ</a>
        <br/>
        <a id="fees" className="menu-item" href="/fees">FEES</a>
        <br/>
        <a id="elevate" className="menu-item" href="/">elevate</a>
        <br/>
        <a id="signup" className="menu-item" href="/signup">SIGN UP</a>
       <br/>
       <a id="reviews" className="menu-item" href="/signup">REVIEW US</a>
       
      </Menu>
        {/* <GiHamburgerMenu className="mx-5 h-10 w-10 justify-center items-center" onClick={showSidebar} /> */}
      </div>
      <a href='https://flywith.virginatlantic.com/'>
      <img className='justify-center p-5 cursor-pointer' src={american}  height={50} width={150} alt="am"  />
      </a>
      
      <div className='hidden sm:flex flex-row text-center border-l-2 border-gray-500   p-5 space-x-5 font-bold'>
        <div className='cursor-pointer'>
        BOOK
        </div>
        <div className='cursor-pointer'>
        CHECK IN
        </div>
        <div className='cursor-pointer'>
        MANAGE
        </div>
 
      </div>
      <div className='hidden lg:flex flex-row flex-grow border-l-2 border-gray-500 space-x-4 p-5'>
        <div className='cursor-pointer font-semibold'>
        Deals
        </div>
        <div className='cursor-pointer font-semibold'>
        Flying With Us
        </div>
        <div className='cursor-pointer font-semibold'>
        Where we Fly
        </div>
        <div className='cursor-pointer font-semibold'>
        Shop
        </div>
        <div className='cursor-pointer font-semibold'>
        FAQ
        </div>
        <div className='cursor-pointer font-semibold'>
        Fees
        </div>
        
      </div>
      <div className='flex flex-row sm:border-x-2 sm:border-gray-500 space-x-4 p-5 md:border-l-2 md:border-r-0 md:border-gray-500'>
        <div className='hidden md:flex cursor-pointer font-bold '>
  elevate
        </div>
        <div className='cursor-pointer font-semibold '>
        Sign In
        </div>
        <div className='hidden sm:flex cursor-pointer font-semibold '>
          Sign Up
        </div>
       
      </div>
      <div className='hidden sm:justify-end sm:right-20 sm:flex sm:flex-grow  md:hidden'>
      <Menu styles={ styles2}   className='justify-center flex flex-col '>
        <a id="home" className="menu-item" href="/">elevate</a>
        <br/>
        <a id="deals" className="menu-item" href="/deals">DEALS</a>
        <br/>
        <a id="fly" className="menu-item" href="/fly">FLYING WITH US</a>
        <br/>
        <a id="where" className="menu-item" href="/where">WHERE WE FLY</a>
        <br/>
        <a id="shop" className="menu-item" href="/shop">SHOP</a>
        <br/>
        <a id="faq" className="menu-item" href="/faq">FAQ</a>
        <br/>
        <a id="fees" className="menu-item" href="/fees">FEES</a>
        <br/>
      </Menu>
      {/* <GiHamburgerMenu className="mx-5 h-10 w-10 justify-center " /> */}
      </div>

    </div>
  )
}

export default Header