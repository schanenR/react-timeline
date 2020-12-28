import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const {person, status, timeStamp} = props.tlEvent;
  return(
    <div>
      <Timestamp time={timeStamp} />
      <h4>{person}</h4>
      <p>{status}</p>
    </div>
  );
};

export default TimelineEvent;