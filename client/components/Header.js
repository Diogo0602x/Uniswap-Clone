import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'

const style = {}
 
const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt='uniswap' height={40} width={40} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>
          <a
            href='https://info.uniswap.org/#/'
            target='_blank'
            rel='noreferrer'
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt='eth logo' height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
      
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
            Connect Wallet
          </div>
        </div>
        )
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header