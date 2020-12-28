import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const {person, status, timeStamp} = props.tlEvent;
  return(
    <div className="timeline-event">
      <div className="event-time" ><Timestamp time={timeStamp} /></div>
      <h4 className="event-person">{person}</h4>
      <p className="event-status">{status}</p>
    </div>
  );
};

export default TimelineEvent;