import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
import { MailOutline, Phone, Room } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='ContainerFooter'>
        <div className='Left'>
            <h5 className='Logo'>
                FitPoint
            </h5>
            <p className='Description'>
            <span>Lorem ipsum dolor sit amet consectetur adipiscing elit, consequat nibh ligula dictum ultrices. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            </p>
            <div className='SocialContainer'>
                <div className='SocialIcon'>
                    <FacebookIcon className='FaceIcon'/>
                </div>
                <div className='SocialIcon'>
                    <InstagramIcon className='InstaIcon'/>
                </div>
                <div className='SocialIcon'>
                    <TwitterIcon className='TwitterIcon'/>
                </div>
                <div className='SocialIcon'>
                    <YouTubeIcon className='YouIcon'/>
                </div>
            </div>
        </div>
        <div className='Center'>
            <h5 className='CenterTitle'>Links: </h5>
            <ul className='List'>
                <li className='ListItem'>
                    <NavLink className="nav-link" aria-current="page" to="/">
                        <span>Home</span>
                     </NavLink>
                </li>
                <li className='ListItem'>
                    <NavLink className="nav-link" to="/categoria/cintas">
                        <span>Cintas</span>
                    </NavLink>
                </li>
                <li className='ListItem'>
                    <NavLink className="nav-link" to="/categoria/indoor">
                        <span>Indoor</span>
                    </NavLink>
                </li>
                <li className='ListItem'>
                    <NavLink className="nav-link" to="/categoria/elipticos">
                        <span>Elípticos</span>
                    </NavLink>
                </li>
                <li className='ListItem'><span>Máquinas</span></li>
                <li className='ListItem'><span>Nutrición</span></li>
                <li className='ListItem'><span>Fitness</span></li>
            </ul>
        </div>
        <div className='Right'>
        <h5 className='RightTitle'>Contacto: </h5>
        <div className='ContactItem'><Room className='ContactIcon'/><span>Av. Francisco Beiró 3944.</span></div>
        <div className='ContactItem'><Phone className='ContactIcon'/><span>+11 4505.2100</span></div>
        <div className='ContactItem'><MailOutline className='ContactIcon'/><span>contacto@fitpoint.com.ar</span></div>
        </div>
    </div>
  )
}

export default Footer;