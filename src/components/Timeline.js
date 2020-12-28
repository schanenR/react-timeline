import React from 'react';
import './Timeline.css';

import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json';

const Timeline = () => {
  return ( 
    <div className="timeline">
    {timelineData.events.map((item, i) => (
      <TimelineEvent key={i} tlEvent={item} />
   ))}
   </div>
  );
};

export default Timeline;