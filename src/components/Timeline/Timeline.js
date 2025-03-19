import React, { Children } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

import './Timeline.css'
import { Typography } from '@mui/material';

const CustomTimeline = ({title, icon, children}) => {

  return (
    <Timeline className = {'timeline'}>
       {/* Item Header */}
      <TimelineItem className={'timeline_firstItem'}>
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}> 
            {icon}
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className={'timeline_header'}>
            {title}
            </Typography>
            </TimelineContent>
      </TimelineItem>
      
      {children}
      </Timeline>
  )
}

export const CustomTimelineSeperator = () => (
    <TimelineSeparator className={'seperator_padding'}>
          <TimelineDot variant = {'outlined'} className={'timeline_dot'}/>
          <TimelineConnector />
        </TimelineSeparator>
)

export default CustomTimeline