import { Typography } from '@mui/material';
import React from 'react';
import CustomTimeline from '../Timeline/Timeline';
import PersonIcon from '@mui/icons-material/Person';
import './Profile.css';
import resumeData from '../../utils/resumeData';
import profileImage from '../../assets/images/IMG_5033.JPG';
import { CustomTimelineSeperator } from '../Timeline/Timeline';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from'../Buttons/Button';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span> <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  // Specify the path to your resume file
  const resumeFile = '/COPY_Emmanuel_Girmaye_resume.pdf';  // Path to the public folder file

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography variant="h4" className="name">{resumeData.name}</Typography>
        <Typography variant="h6" className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImage} alt="Profile" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          
          {/* Render social links dynamically (Without Icons) */}
          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem 
              key={key}
              title={key} 
              text={key} 
              link={resumeData.socials[key].link} 
            />
          ))}
        </CustomTimeline>
        <div className='button_container' style={{ display: 'flex' }}>
          {/* CustomButton to download the resume */}
          <CustomButton 
            text="Download Resume" 
            onClick={() => {
              console.log('Attempting to download from:', resumeFile);  // Debugging the file path
              const link = document.createElement('a');
              link.href = resumeFile;  // Path to the public folder file
              link.download = 'COPY_Emmanuel_Girmaye_resume.pdf'; // File name for download
              link.click();  // Trigger the download
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;