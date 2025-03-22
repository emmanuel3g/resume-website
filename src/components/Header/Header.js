import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  LinkedIn,
  GitHub,
  Telegram,
} from "@mui/icons-material";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
import './Header.css'

const Header = (props) => {
  const pathName = props?.location?.pathname
  return (
    <Navbar expand="lg" sticky ='top' className = 'header'>
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          <HomeRounded/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle/>

      <Navbar.Collapse>
        <Nav className = 'header_left'>
          {/* Resume Link */}
          <Nav.Link as={NavLink} 
          to = '/' 
          className={pathName == '/' ? 'header_link_active' : 'header_link'}>
          RESUME
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link as={NavLink} 
          to = '/Portfolio' 
          className={pathName == '/Portfolio' ? 'header_link_active' : 'header_link'}>
          CONTACT ME
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a 
              href={resumeData.socials[key].link}  // <-- Fixed "link" (lowercase)
              target="_blank" 
              rel="noopener noreferrer"
              className="link" 
              key={key}
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton 
          text={'Hire me'} 
          icon={<LinkedIn />} 
          onClick={() => window.open('https://www.linkedin.com/in/emmanuel-girmaye', '_blank')}
        />
        </div> 
      </Navbar.Collapse>
    </Navbar>

  );
};

export default withRouter (Header);
