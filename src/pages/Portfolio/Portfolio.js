import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, TextField, Typography } from '@mui/material';

const Portfolio = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Send reply email to the user
    emailjs
      .sendForm(
        'service_uzpm0s7',  // Your EmailJS Service ID
        'template_hwr9v18',  // Reply template to the user
        form.current, // Reference to the form
        'vhf9ohG3hb_1y2NJi' // Your Public Key from EmailJS
      )
      .then(
        (response) => {
          console.log('Reply sent to user:', response.status, response.text);
        },
        (error) => {
          console.log('Reply failed...', error.text);
        }
      );

    // Send email to admin (you)
    emailjs
      .sendForm(
        'service_uzpm0s7',  // Your EmailJS Service ID
        'template_2xjimtp',  // Email template to send to you
        form.current, // Reference to the form
        'vhf9ohG3hb_1y2NJi' // Your Public Key from EmailJS
      )
      .then(
        (response) => {
          console.log('Email sent to admin:', response.status, response.text);
          setSuccessMessage('Message sent successfully!');
        },
        (error) => {
          console.log('Failed to send email to admin...', error.text);
          setSuccessMessage('Failed to send message.');
        }
      );
  };

  return (
    <Grid container spacing={5} className='section p_45'>
      {/* Contact Form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Contact Form</h6>
          </Grid>

          <Grid item xs={12}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='user_name'  // Name field matches {{user_name}} in the template
                    label='Name'
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='user_email'  // Email field matches {{user_email}} in the template
                    label='E-mail'
                    type='email'
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='message'  // Message field matches {{message}} in the template
                    label='Message'
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <button type='submit'>Submit</button> {/* Using regular button */}
                </Grid>
              </Grid>
            </form>
            {successMessage && <Typography>{successMessage}</Typography>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;