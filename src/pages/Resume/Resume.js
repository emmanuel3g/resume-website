import React from 'react'
import './Resume.css'
import { Grid, Paper, TextField, Typography } from '@mui/material' 
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeperator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import BuildIcon from '@mui/icons-material/Build';
import CustomButton from '../../components/Buttons/Button'

const Resume = () => {
  return (
    <>
      {/* About Me Section */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 fontWeight="bold" className='section_title_text'> About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Resume Section */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 fontWeight="bold" className='section_title_text'> Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Projects */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Projects' icon={<BuildIcon />}>
                {resumeData.projects.map((project, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeperator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'> 
                        {project.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'> 
                        {project.date}
                      </Typography>
                      <Typography 
                        variant='body2' 
                        className='timeline_description' 
                        component="div"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Work Experiences' icon={<WorkIcon />}>
                {resumeData.experiences.map((experience, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeperator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'> 
                        {experience.title}
                      </Typography>
                      <div>
                      <Typography variant='caption' className='timeline_date'> 
                        {experience.company}
                      </Typography>
                      </div>
                      <Typography variant='caption' className='timeline_date'> 
                        {experience.date}
                      </Typography>
                      <Typography 
                        variant='body2' 
                        className='timeline_description' 
                        component="div"
                        dangerouslySetInnerHTML={{ __html: experience.description }}
                      />
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills Sections */}
      <Grid container className='section graybg pb_45 p_50'> 
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={3}>
            {resumeData.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skills_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element, i) => (
                    <Typography variant='body2' className='skill_description' key={i}>
                      <TimelineDot variant={'outlined'} className='timeline_dot' />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Resume;