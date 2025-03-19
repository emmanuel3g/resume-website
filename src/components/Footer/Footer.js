import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'


const Footer = () => {
  return (
    <div className = 'footer'>
        <div className = "footer_left">
          <Typography className =".footer_name">
            {resumeData.name}
          </Typography>
        </div>
        <div className = "footer_right">
          <Typography className ="footer_copyright">
            Developed by <a href="https://www.linkedin.com/in/emmanuel-girmaye/" target = '_blank'> Emmanuel Girmaye
            </a>
            .
            <br/>
            Clone idea from travoline.
          </Typography>
        </div>
    </div>
  )
}

export default Footer