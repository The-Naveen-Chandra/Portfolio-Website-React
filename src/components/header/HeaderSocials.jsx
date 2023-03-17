import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub/></a>
        <a href="http://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}


export default HeaderSocials