import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, icon, onClick }) => {
  return (
    <Button
      className="custom_btn"
      sx={{
        border: '2px solid black',
        outline: '2px solid black',
        outlineOffset: '2px',
        borderRadius: '50px',
        padding: '5px 16px',
        backgroundColor: 'var(--main-color)',
        '&:hover': {
          backgroundColor: 'var(--main-color)',
        },
      }}
      disableElevation
      disableRipple
      onClick={onClick}  // Attach the onClick handler here
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;